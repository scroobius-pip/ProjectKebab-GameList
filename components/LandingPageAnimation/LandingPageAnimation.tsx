import { colors } from '../../styles'
import { useSpring, animated, useSprings, config } from 'react-spring'
import { useState, useEffect } from 'react'
import { random } from 'lodash'



const platforms = [
    require('./icons/coin.svg'),
    require('./icons/steam.svg'),
    require('./icons/playstation.svg'),
    require('./icons/xbox.svg'),
    require('./icons/switch.svg'),
    require('./icons/origin.svg'),
    require('./icons/Wii.svg'),
]

export default ({ itemSize = 10, itemPadding = 2, }) => {

    // const itemSize = 10
    // const itemPadding = 2
    const offsetFactor = 3

    const calculateTop = (index: number) => {
        const vw = (index * -itemSize) + itemSize * offsetFactor
        const vmin = (index * (-itemPadding * 2)) + (itemPadding * 2) * offsetFactor

        return `calc(${vw}vw + ${vmin}vmin)`


    }

    const [lIndex, setLIndex] = useState(random(0, platforms.length - 1, false))
    const [rIndex, setRIndex] = useState(random(0, platforms.length - 1, false))
    const lProps = useSpring({ top: calculateTop(lIndex), config: config.gentle })
    const rProps = useSpring({ top: calculateTop(rIndex), config: config.gentle })
    const lSprings = useSprings(platforms.length, platforms.map((_, index) => (index === lIndex ? { opacity: 1, transform: 'scale(1.1)' } : { opacity: 0.1, transform: 'scale(0.8)' })))
    const rSprings = useSprings(platforms.length, platforms.map((_, index) => (index === rIndex ? { opacity: 1, transform: 'scale(1.1)' } : { opacity: 0.1, transform: 'scale(0.8)' })))

    useEffect(() => {
        setInterval(() => {
            let randLIndex = random(0, platforms.length - 1, false)
            setLIndex(randLIndex)
            let randRIndex = random(0, platforms.length - 1, false)
            setRIndex(randRIndex === 0 && randRIndex === randLIndex ? 1 : randRIndex)
        }, 2000)
    }, [])

    return <div> {/*container*/}
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: `${itemSize + (itemPadding * 2)}vw`,
            minHeight: `${itemSize + (itemPadding * 2)}vw`

        }}>
            <div style={{}}>
                <img style={{ height: `${itemSize - 1}vw` }} src={require('./icons/reddit-user.svg')} />
            </div>
            <div style={{
                backgroundColor: colors.overlay,
                height: '100%',
                borderRadius: '1vw',
                flex: 1,
                marginLeft: '2vmin',
                marginRight: '2vmin',
                justifyContent: 'space-between',
                display: 'flex',
                position: 'relative',
                zIndex: -20,
                alignItems: 'center'
            }}>
                <animated.div style={{ position: 'relative', ...lProps }}>
                    <div
                        style={{
                            position: 'relative',
                            zIndex: -10,
                            textAlign: 'center'
                        }}
                    >
                        {lSprings.map((props, index) => (
                            <animated.div key={index} style={{ padding: `${itemPadding}vmin`, ...props }}>
                                <img style={{ height: `${itemSize}vw` }} src={platforms[index]} />
                            </animated.div>
                        ))}


                    </div>
                </animated.div>
                <img style={{ height: `${itemSize - 1}vw`, opacity: 0.2, }} src={require('./icons/trade-arrow.svg')} />
                <animated.div style={{ position: 'relative', ...rProps }}>
                    <div
                        style={{
                            position: 'relative',
                            zIndex: -10,
                            textAlign: 'center'
                        }}
                    >
                        {
                            rSprings.map((props, index) => (
                                <animated.div key={index} style={{ padding: `${itemPadding}vmin`, ...props }}>
                                    <img style={{ height: `${itemSize}vw` }} src={platforms[index]} />
                                </animated.div>
                            ))
                        }


                    </div>
                </animated.div>
            </div>
            <div style={{}}>
                <img style={{ height: `${itemSize - 1}vw` }} src={require('./icons/reddit-user2.svg')} />
            </div>
        </div >
    </div>
}
