import { PremiumWithModal } from '../components/Modals'
import { useState } from 'react'
import { Button, } from 'react-bootstrap'
import SettingsSection, { Props as SettingsSectionProps } from '../components/SettingsSection'
import Switch from '../components/Switch'

interface UserSettings {
    notifications_enabled: boolean
    location_enabled: boolean
    premium_enabled: boolean
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

                            return <Switch id='notifications' isOn={value} handleToggle={() => setValue(!value)} />
                        },

                    },
                    {
                        title: 'Location',
                        description: "You could show your location, for physical trades",
                        Input: () => {
                            const [value, setValue] = useState(settings.location_enabled)

                            return <Switch id='location' isOn={value} handleToggle={() => setValue(!value)} />
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

                            return <Switch id='premium' isOn={value} handleToggle={() => setValue(!value)} />
                        }
                    }
                ]
            }
        ]
    }
)

const Page = ({ userSettings }: { userSettings: UserSettings }) => {
    const [show, setShow] = useState(false)

    const open = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
    }


    return <>
        <PremiumWithModal close={close} visible={show} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
            <span>
                <Button variant='outline-danger'>Cancel</Button>
            </span>
            <span style={{ marginLeft: 10 }}>
                <Button onClick={open}>Save</Button>
            </span>
        </div>

        <SettingsSection {...settingsData(userSettings)} />
    </>
}

Page.getInitialProps = async () => {
    return {
        userSettings: {
            notifications_enabled: true,
            location_enabled: true,
            premium_enabled: false
        }
    }
}



export default Page