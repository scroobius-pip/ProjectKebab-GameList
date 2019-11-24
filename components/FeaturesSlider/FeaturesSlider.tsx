import React from 'react'
import { CarouselProvider, Slide, Slider, DotGroup, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './dot.css'
import FeatureCard from './FeatureCard'
import { ScreenClassRender } from 'react-grid-system'
import { Row, Col } from 'react-bootstrap'


export default () => {




    return (
        <>
            <ScreenClassRender

                render={screenClass => {
                    return ['md', 'lg', 'xl'].includes(screenClass) ? <FeatureGrid /> : <FeatureSlider />

                }}
            />
        </>

    )

}


const FeatureSlider = () => <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.1}
    totalSlides={3}
    infinite

>
    <div style={{ position: 'relative' }}>

        <Slider>
            <Slide index={0}>
                <FeatureCard />
            </Slide>
            <Slide index={1}>
                <FeatureCard />
            </Slide>
            <Slide index={2}>
                <FeatureCard />
            </Slide>
        </Slider>

        <DotGroup />
    </div>

</CarouselProvider>


const FeatureGrid = () => {
    return <Row>
        <Col xl={4} md={6}>
            <FeatureCard />
        </Col>
        <Col xl={4} md={6}>
            <FeatureCard />

        </Col>
        <Col xl={4} md={6}>

            <FeatureCard />
        </Col>
    </Row>
}