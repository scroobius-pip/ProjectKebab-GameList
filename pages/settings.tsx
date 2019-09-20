
import SocialLoginButton from '../components/SocialLoginButton'
import Layout from '../components/Layout'
import { PremiumWithModal } from '../components/Modals'
import { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Section from '../components/Section'
import CheckBox from '../components/CheckBox'
import SettingsSection, { Props as SettingsSectionProps } from '../components/SettingsSection'
import Switch from '../components/Switch'

const settingsData: SettingsSectionProps = {
    sections: [
        {
            title: 'Profile Settings',
            subsections: [
                {
                    title: 'Enable match notifications',
                    description: "We'll send you email and push notiﬁcations  whenever someone has what you want ",
                    Input: () => {
                        const [value, setValue] = useState(false)

                        return <Switch id='notifications' isOn={value} handleToggle={() => setValue(!value)} />
                    }
                },
                {
                    title: 'Location',
                    description: "You could show your location, for physical trades",
                    Input: () => {
                        const [value, setValue] = useState(false)

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
                        const [value, setValue] = useState(false)

                        return <Switch id='premium' isOn={value} handleToggle={() => setValue(!value)} />
                    }
                }
            ]
        }
    ]
}

export default () => {
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

        <SettingsSection {...settingsData} />
    </>
}