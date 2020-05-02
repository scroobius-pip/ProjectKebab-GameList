import { withApollo } from 'functions/utils/apollo';
import { withAuth } from '@components/WithAuth'
import WithLayout from '@components/WithLayout'
import { colors, font } from 'styles';
import Section from '@components/Section';
import { Tab, Nav } from 'react-bootstrap';
import initMatchContainer from '@components/MatchContainer'
import { IMatchSortType } from 'generated/apolloComponents'
import SocialShare from '@components/SocialShare';
interface Props {
    premiumClicked?: () => {}

}

const Page = ({ premiumClicked }: Props) => {

    const TabHead = () => <div style={{ fontSize: '1em', fontWeight: 600, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
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

    const MatchContainer = initMatchContainer({
        openPremium: premiumClicked
    })

    const TabContent = () => <Tab.Content>
        <Tab.Pane eventKey='rate'>
            <MatchContainer matchType={IMatchSortType['MatchRate']} />
        </Tab.Pane>
        <Tab.Pane eventKey='location'>
            <MatchContainer matchType={IMatchSortType['Location']} />
        </Tab.Pane>
    </Tab.Content>

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
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, flexDirection: 'column', alignItems: 'center', opacity: 0.8 }}>
                <h6 style={{}}> Share rade with others</h6>
                <div>
                    <SocialShare />
                </div>
            </div>
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