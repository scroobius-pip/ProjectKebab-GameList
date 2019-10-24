import { useState, useContext } from 'react'
import { Button, } from 'react-bootstrap'
import SettingsSection, { Props as SettingsSectionProps } from '../components/SettingsSection'
import Switch from '../components/Switch'
import React from 'react'
import Router from 'next/router'
import AuthTokenContext from 'context/AuthTokenContext'
import { withAuth } from '@components/WithAuth'
import { getAuthToken } from 'functions/utils/authToken'
import WithLayout from '@components/WithLayout'
import { withApollo } from 'functions/utils/apollo'

class Page extends React.Component<Props> {

    static async getInitialProps(ctx) {
        const authToken = getAuthToken(ctx)
        // console.log(`auth token: ${authToken}`)

        return {
            userSettings: {
                notifications_enabled: true,
                location_enabled: true,
                premium_enabled: false,

            }
        }
    }


    render() {

        const userSettings = this.props.userSettings
        userSettings.handlePremiumToggle = () => {
            this.props.premiumClicked()
            return false
        }
        userSettings.handleNotificationToggle = (value) => { return !value }
        userSettings.handleLocationToggle = (value) => { return !value }
        return (
            <>
                {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
                    <span>
                        <Button variant='outline-danger'>Cancel</Button>
                    </span>
                    <span style={{ marginLeft: 10 }}>
                        <Button onClick={() => { }}>Save</Button>

                    </span>
                </div> */}

                <SettingsSection {...settingsData(userSettings)} />
            </>
        )
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

interface Props {
    userSettings: UserSettings
    signInClicked: () => {}
    premiumClicked: () => {}
}

const settingsData: (userSettings: UserSettings) => SettingsSectionProps = (settings) => (
    {
        sections: [
            {
                title: 'Profile Settings',
                subsections: [
                    {
                        title: 'Enable match notifications',
                        description: "We'll send you email and push notiﬁcations  whenever someone has what you want ",
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
                        description: "You could show your location, for physical trades",
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