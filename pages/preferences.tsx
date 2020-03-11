import { useState, useContext, useEffect } from 'react'
import SettingsSection, { Props as SettingsSectionProps } from '../components/SettingsSection'
import Switch from '../components/Switch'
import React from 'react'
import { withAuth } from '@components/WithAuth'
import WithLayout from '@components/WithLayout'
import { withApollo } from 'functions/utils/apollo'
import getUserInfo from 'functions/graphql/queries/getUserInfo'
import { getApolloContext } from 'react-apollo'
import { UpdateLocation } from '../functions/UpdateLocation'
import updateNotifications from 'functions/graphql/mutations/updateNotifications'
import { IErrorType } from 'generated/apolloComponents'
interface Props {
    userSettings: Pick<UserSettings, 'notifications_enabled' | 'location_enabled' | 'premium_enabled'>
    signInClicked?: () => {}
    premiumClicked?: () => {}
}
interface UserSettings {
    notifications_enabled: boolean
    location_enabled: boolean
    premium_enabled: boolean,
    handleNotificationToggle: (prevState: boolean) => Promise<void> | void
    handleLocationToggle: (prevState: boolean) => Promise<void> | void
    handlePremiumToggle: (prevState: boolean) => Promise<void> | void
}


const initSettingsData: (userSettings: UserSettings) => SettingsSectionProps = (settings) => (
    {
        sections: [
            {
                title: 'Profile Settings',
                subsections: [
                    {
                        title: 'Enable match notifications',
                        description: "We'll send you email and push notiﬁcations whenever someone has what you want ",
                        Input: () => <Switch id='notifications' initialState={settings.notifications_enabled} handleToggle={settings.handleNotificationToggle} />
                    },
                    {
                        title: 'Location',
                        description: "You could show your location for physical trades",
                        Input: () => <Switch id='location' initialState={settings.location_enabled} handleToggle={settings.handleLocationToggle} />
                    }
                ]
            },
            {
                title: 'Membership',
                subsections: [
                    {
                        title: 'Premium',
                        description: "Extra features, ad-free experience, and support the developer",
                        Input: () => <Switch id='premium' initialState={settings.premium_enabled} handleToggle={settings.handlePremiumToggle} />
                    }
                ]
            }
        ]
    }
)


const Page = (props: Props) => {
    const apolloClient = useContext(getApolloContext()).client



    const { unsetLocation, setLocation } = UpdateLocation(apolloClient)

    const toggleNotifications = async (initialState: boolean) => {
        if (!initialState) {
            const status = await Notification.requestPermission()
            if (status !== 'granted')
                throw new Error('Rejected Notification')
            const result = await updateNotifications(true, apolloClient)
            if (result.error && result.error.type === IErrorType.UpgradeMembership) {
                props.premiumClicked()
                throw new Error(result.error.type)
            }
        } else {
            await updateNotifications(false, apolloClient)
        }
    }


    const userSettings: UserSettings = {
        location_enabled: props.userSettings.location_enabled,
        notifications_enabled: props.userSettings.notifications_enabled,
        premium_enabled: props.userSettings.premium_enabled,
        handleLocationToggle: async (value) => {
            await (value ? unsetLocation : setLocation)()
        },
        handleNotificationToggle: toggleNotifications,
        handlePremiumToggle: (value) => {
            if (props.userSettings.premium_enabled) throw ''
            props.premiumClicked()
        }
    }

    return (
        <>
            <SettingsSection {...initSettingsData(userSettings)} />
        </>
    )

}

Page.getInitialProps = async ({ apolloClient }): Promise<Props> => {


    const { info: { setting_matchNotifications, isPro, location: { country } } } = await getUserInfo(apolloClient)
    return {
        userSettings: {
            notifications_enabled: setting_matchNotifications,
            location_enabled: !!country.length,
            premium_enabled: isPro,
        },

    }

}




export default withApollo(withAuth(WithLayout(Page)))


