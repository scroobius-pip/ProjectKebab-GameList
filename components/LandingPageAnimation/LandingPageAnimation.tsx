import { colors } from '../../styles'
import { useSpring, animated, useSprings } from 'react-spring'
import { useState, useEffect } from 'react'
import { random } from 'lodash'

const calculateTop = (index: number) => {
    const vw = (index * -10) + 30
    const vmin = (index * -4) + 12

    return `calc(${vw}vw + ${vmin}vmin)`


}

const platforms = [
    require('./platformIcons/coin.svg'),
    require('./platformIcons/steam.svg'),
    require('./platformIcons/playstation.svg'),
    require('./platformIcons/xbox.svg'),
    require('./platformIcons/switch.svg'),
    require('./platformIcons/origin.svg'),
    require('./platformIcons/Wii.svg'),
]

export default () => {
    const [lIndex, setLIndex] = useState(0)
    const [rIndex, setRIndex] = useState(2)
    const lProps = useSpring({ top: calculateTop(lIndex) })
    const rProps = useSpring({ top: calculateTop(rIndex) })
    const lSprings = useSprings(platforms.length, platforms.map((_, index) => (index === lIndex ? { opacity: 1, transform: 'scale(1.1)' } : { opacity: 0.1, transform: 'scale(0.8)' })))
    const rSprings = useSprings(platforms.length, platforms.map((_, index) => (index === rIndex ? { opacity: 1, transform: 'scale(1.1)' } : { opacity: 0.1, transform: 'scale(0.8)' })))

    useEffect(() => {
        setInterval(() => {
            setLIndex(random(0, platforms.length - 1, false))
            setRIndex(random(0, platforms.length - 1, false))
        }, 2000)
    }, [])

    return <div> {/*container*/}
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '15vw',

        }}>
            <div style={{}}>
                <img style={{ height: '5vw' }} src={require('./platformIcons/user.svg')} />
            </div>
            <div style={{
                backgroundColor: colors.section,
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
                            <animated.div style={{ padding: '2vmin', ...props }}>
                                <img style={{ height: '10vw' }} src={platforms[index]} />
                            </animated.div>
                        ))}


                    </div>
                </animated.div>
                <img style={{ height: '5vw', opacity: 0.5, }} src={require('./platformIcons/trade-arrow.svg')} />
                <animated.div style={{ position: 'relative', ...rProps }}>
                    <div
                        style={{
                            position: 'relative',
                            zIndex: -10,
                            textAlign: 'center'
                        }}
                    >
                        {rSprings.map((props, index) => (
                            <animated.div style={{ padding: '2vmin', ...props }}>
                                <img style={{ height: '10vw' }} src={platforms[index]} />
                            </animated.div>
                        ))}


                    </div>
                </animated.div>
            </div>
            <div style={{}}>
                <img style={{ height: '5vw' }} src={require('./platformIcons/user.svg')} />
            </div>
        </div >
    </div>
}
