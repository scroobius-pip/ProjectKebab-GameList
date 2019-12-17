import { withApollo } from 'functions/utils/apollo';
import { withAuth } from '@components/WithAuth'
import WithLayout from '@components/WithLayout'
import { colors, font } from 'styles';
import Section from '@components/Section';
import { Tab, Nav } from 'react-bootstrap';
import MatchContainer from '@components/MatchContainer'
interface Props {
    premiumClicked?: () => {}
}

const TabHead = () => <div style={{ fontSize: 20, fontWeight: 600, display: 'flex', justifyContent: 'center' }}>
    <Nav variant='pills'   >
        <Nav.Item>
            <Nav.Link style={{ transition: 'all 200ms ease' }} eventKey='rate'>

                <span style={styles.navItemSpans}>Match Rate</span>
                <img src={require('../assets/icons/match_rate.svg')} style={styles.navItemImg} />

            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{ transition: 'all 200ms ease' }} eventKey='location'>
                <span style={styles.navItemSpans}>Location</span>
                <img src={require('../assets/icons/location.svg')} style={styles.navItemImg} />
            </Nav.Link>
        </Nav.Item>

    </Nav>
    <style jsx>{
        `
.nav-link.active {
    background-color: ${colors.primary}
}
`
    }</style>
</div>

const TabContent = () => <Tab.Content>
    <Tab.Pane eventKey='rate'>
        <MatchContainer />
    </Tab.Pane>
    <Tab.Pane eventKey='location'>

        <MatchContainer />
    </Tab.Pane>
</Tab.Content>

const Page = ({ premiumClicked }: Props) => {

    return (
        <>
            <Section>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', }}>
                        <Tab.Container id='matches' defaultActiveKey='rate'>
                            <TabHead />
                            <TabContent />
                        </Tab.Container>
                    </div>
                </div>

            </Section>
        </>
    )


}

const styles: { [key: string]: React.CSSProperties } = {
    navItemSpans: {
        paddingRight: 10,
        color: 'white'
    },
    navItemImg: {
        fontSize: '1em',
        height: '1.2em'
    }
}

export default withApollo(withAuth(WithLayout(Page)))