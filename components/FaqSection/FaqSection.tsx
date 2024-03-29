import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import { colors } from '../../styles'


interface LandingAccordionProps {
    heading: string
    body: string
    id: number
}

type FaqDatum = Pick<LandingAccordionProps, "body" | "heading">

const faqData: FaqDatum[] = [

    {
        heading: 'How safe is nakama ?',
        body: ''
    },
    {
        heading: 'Physical or Digital ?',
        body: ''
    },
    {
        heading: 'Is trading done on the platform ?',
        body: ''
    },
    {
        heading: 'What platforms are supported ?',
        body: ''
    },
    {
        heading: 'What about hardware ?',
        body: ''
    },
   
    {
        heading: 'Hey how much does this service cost ?',
        body: ''
    }
]

const LandingAccordion = ({ heading, body, id }: LandingAccordionProps) => {
    return <Card style={{ backgroundColor: colors.section, marginBottom: 10 }}>
        <Accordion.Toggle as={Card.Header} eventKey={id.toString()}>
            {heading}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={id.toString()}>
            <Card.Body style={{ backgroundColor: colors.background }}>{body}</Card.Body>
        </Accordion.Collapse>
    </Card>
}



export default () => {
    return <div style={{ width: '100%', maxWidth: 800, margin: 'auto' }}>
        <Accordion defaultActiveKey="0">
            {faqData.map((faq, i) => <LandingAccordion id={i} {...faq} />)}
        </Accordion>
    </div>
}