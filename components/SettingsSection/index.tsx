import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from '../Section';

interface SubSection {
    title: string
    description: string
    Input: () => React.ReactElement
}

interface Section {
    title: string
    subsections: SubSection[]
}

export interface Props {
    sections: Section[]
}

const SubSection = ({ title, description, Input }: SubSection) => {
    return (
        <Row>
            <Col xs={12} md={10} >
                <h6>{title}</h6>
                <p style={{ maxWidth: 600, color: '#DCDCDC' }}>{description}</p>
            </Col>
            <Col xs={12} md={2} >
                <div style={{ float: 'right' }}>
                    <Input />
                </div>
            </Col>
        </Row>
    )
}


const SettingsSection = ({ title, subsections }: Section) => {
    return (
        <div style={{ marginBottom: 40 }} >
            <div><h6 style={{ marginLeft: 20, color: '#8B8B8B' }}>{title}</h6></div>
            <div style={{ marginTop: 20 }}>
                <Section>
                    {
                        subsections.map((props) => {
                            return <SubSection key={props.title} {...props} />
                        })
                    }
                </Section>
            </div>
        </div>
    )
}

export default ({ sections }: Props) => {
    return <>
        {sections.map((props) => {
            return <SettingsSection {...props} />
        })}
    </>
}