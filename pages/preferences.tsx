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


const Page = (props: Props) => {
    const apolloClient = useContext(getApolloContext()).client


    const [state, setState] = useState({

        notifications_enabled: false,
        location_enabled: false,
        premium_enabled: false
    })

    const setLocation = () => {

        window.navigator.geolocation.getCurrentPosition((position) => {

            const { longitude, latitude } = position.coords
            console.log(position.coords)
            updateLocation({ latitude, longitude }, apolloClient)
            setState({
                location_enabled: true,
                ...state
            })
        }, (error) => {
            console.log(error.message)
            this.setState({
                location_enabled: false
            })
        }, {
            enableHighAccuracy: true,
            maximumAge: 60 * 10 * 1000,

        })


    }

    const unsetLocation = () => {
        updateLocation({ longitude: 0, latitude: 0 }, apolloClient)
    }

    useEffect(() => {

        setState({
            ...state,
            ...props.userSettings
        })
    }, [])




    const userSettings: UserSettings = {
        ...state,
        handleLocationToggle: (value) => {
            if (value) {
                unsetLocation()

            } else {

                setLocation()
            }
            return !value
        },
        handleNotificationToggle: (value) => { return !value },
        handlePremiumToggle: () => {
            props.premiumClicked()
            return false
        }

    }

    return (
        <>

            <SettingsSection {...settingsData(userSettings)} />
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


interface UserSettings {
    notifications_enabled: boolean
    location_enabled: boolean
    premium_enabled: boolean,
    handleNotificationToggle: (value: boolean) => Promise<boolean> | boolean
    handleLocationToggle: (value: boolean) => Promise<boolean> | boolean
    handlePremiumToggle: (value: boolean) => Promise<boolean> | boolean
}


const settingsData: (userSettings: UserSettings) => SettingsSectionProps = (settings) => (
    {
        sections: [
            {
                title: 'Profile Settings',
                subsections: [
                    {
                        title: 'Enable match notifications',
                        description: "We'll send you email and push notiﬁcations whenever someone has what you want ",
                        Input: () => {
                            const [value, setValue] = useState(settings.notifications_enabled)
                            const handleToggle = async () => {
                                const result = await settings.handleNotificationToggle(value)
                                setValue(result)
                            }
                            return <Switch id='notifications' isOn={value} handleToggle={handleToggle} />
                        },

                    },
                    {
                        title: 'Location',
                        description: "You could show your location for physical trades",
                        Input: () => {
                            const [value, setValue] = useState(settings.location_enabled)
                            const handleToggle = async () => {
                                const result = await settings.handleLocationToggle(value)
                                setValue(result)
                            }
                            return <Switch id='location' isOn={value} handleToggle={handleToggle} />
                        }
                    }
                ]
            },
            {
                title: 'Membership',
                subsections: [
                    {
                        title: 'Premium',
                        description: "Extra features, ad-free experience, and support the developer",
                        Input: () => {
                            const [value, setValue] = useState(settings.premium_enabled)
                            const handleToggle = async () => {
                                const result = await settings.handlePremiumToggle(value)
                                setValue(result)
                            }
                            return <Switch id='premium' isOn={value} handleToggle={handleToggle} />
                        }
                    }
                ]
            }
        ]
    }
)


export default withApollo(withAuth(WithLayout(Page)))