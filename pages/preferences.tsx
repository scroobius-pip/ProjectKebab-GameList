import { useState, useContext, useEffect } from 'react'
import SettingsSection, { Props as SettingsSectionProps } from '../components/SettingsSection'
import Switch from '../components/Switch'
import React from 'react'
import { withAuth } from '@components/WithAuth'
import WithLayout from '@components/WithLayout'
import { withApollo } from 'functions/utils/apollo'
import getUserInfo from 'functions/graphql/queries/getUserInfo'
import updateLocation from 'functions/graphql/mutations/updateLocation'
import { getApolloContext } from 'react-apollo'
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

    const getPosition = function (options: PositionOptions): Promise<Position> {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    const setLocation = async () => {
        try {
            const { longitude, latitude } = (await getPosition({
                maximumAge: 60 * 10 * 1000,
            })).coords

            await updateLocation({ latitude, longitude }, apolloClient)

        } catch (error) {
            throw error
        }
    }
    const unsetLocation = async () => {
        await updateLocation({ longitude: 0, latitude: 0 }, apolloClient)
    }




    const userSettings: UserSettings = {
        location_enabled: props.userSettings.location_enabled,
        notifications_enabled: props.userSettings.notifications_enabled,
        premium_enabled: props.userSettings.premium_enabled,
        handleLocationToggle: async (value) => {
            await (value ? unsetLocation : setLocation)()
        },
        handleNotificationToggle: () => { },
        handlePremiumToggle: () => {
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


    const { info: { setting_matchNotifications, location: { country } } } = await getUserInfo(apolloClient)
    return {
        userSettings: {
            notifications_enabled: setting_matchNotifications,
            location_enabled: !!country.length,
            premium_enabled: false,
        },

    }

}




export default withApollo(withAuth(WithLayout(Page)))