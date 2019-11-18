import React from 'react'
import { CarouselProvider, Slide, Slider, DotGroup, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './dot.css'


export default () => {


    return (
        <>

            <CarouselProvider
                naturalSlideWidth={350}
                naturalSlideHeight={250}
                totalSlides={3}
                infinite
            >
                <Slider>
                    <Slide index={0}>
                        <FeatureSlide />
                    </Slide>
                    <Slide index={1}>
                        <FeatureSlide />
                    </Slide>
                    <Slide index={2}>
                        <FeatureSlide />
                    </Slide>
                </Slider>

                <DotGroup />

            </CarouselProvider>



        </>

    )

}

function FeatureSlide() {
    return <div className='feature-card' style={{
        position: 'relative',
        textAlign: 'center',
        backgroundColor: 'rgb(41, 43, 47)',
        padding: 20,
        paddingTop: 40,
        marginTop: 50
    }}>
        <div className='icon-circle' style={{ position: 'absolute', backgroundColor: 'rgb(41, 43, 47)', display: 'table' }}>
            <div className='icon-circle-inner' style={{ backgroundColor: '#4A4C4F' }}></div>

        </div>
        <div>
            <h1 style={{ fontWeight: 'bolder' }}>Matching</h1>
            <p style={{ marginTop: 15, color: '#AEAEAE' }}>Nakama makes trading your games easier and safe</p>
        </div>
        <style jsx>
            {`

                    .feature-card {
                      
                        border-radius:10px;
                        width:350px;
                        height:250px;
                        margin:auto;
                        max-width:350px;
                        box-shadow:0 5px 20px 4px rgba(0, 0, 0, 0.22);
                    }
                    
                    .icon-circle {
                        width:8vh;
                        height:8vh;
                        top:-4vh;
                        border-radius:50%;
                        
                        left:50%;
                        margin-left: -4vh;
                        padding:10px;
                        box-shadow: 0 5px 20px 4px rgba(0, 0, 0, 0.22);
                        
                    }

                    .icon-circle-inner {
                        width:100%;
                        height:100%;
                        border-radius:50%;
                        display:table-cell;
                    }
                    
                    `}
        </style>
    </div>;
}
