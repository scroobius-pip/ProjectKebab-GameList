import React from 'react'
import { CarouselProvider, Slide, Slider, DotGroup, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './dot.css'
import FeatureCard from './FeatureCard'
import { ScreenClassRender } from 'react-grid-system'
import { Row, Col } from 'react-bootstrap'


export default () => <ScreenClassRender
    render={screenClass => ['md', 'lg', 'xl'].includes(screenClass) ? <FeatureGrid /> : <FeatureSlider />}
/>


const Features: Array<{ title: string, body: string, icon: any }> = [
    {
        title: 'Matching',
        body: `
        Easily find gamers to trade with, based on your wish list or your location.
        `,
        icon: require('./matching.svg')
    },
    {
        title: 'Game List',
        body: `
        Manage your list of games and items, you can share a link on trading subreddits, and let potential traders find games easily.
        `,
        icon: require('./list.svg')
    },
    {
        title: 'No Scammers',
        body: `
        Nakama uses the SteamRep and USL databases to prevent known scammers from ever registering on the platform.
        `,
        icon: require('./scamming.svg')

    },
    {
        title: 'Sync Wishlist',
        body: 'You can easily synchronize your steam wishlist, more platforms like origin coming soon.',
        icon: require('./sync.svg')
    },
    {
        title: 'Notifications',
        body: 'Get notified once someone has what you want.',
        icon: require('./notification.svg')
    },
    // {
    //     title: 'Sync Wishlist',
    //     body: 'You can easily synchronize your steam wishlist, more platforms like origin coming soon.',
    //     icon: require('./sync.svg')
    // },
]


const FeatureSlider = () => <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.1}
    totalSlides={Features.length}
    infinite
>
    <div style={{ position: 'relative' }}>
        <Slider>
            {Features.map((feature, index) => <Slide index={index}><FeatureCard {...feature} /></Slide>)}
        </Slider>
        <DotGroup />
    </div>

</CarouselProvider>


const FeatureGrid = () => <Row>
    {Features.map(feature => <Col xl={4} md={{ span: 6 }}><FeatureCard {...feature} /> </Col>)}
</Row>
