import { colors } from '../../styles'
import { } from 'react-spring'

export default () => {
    return <div> {/*container*/}
        <HorizontalBar />
    </div>
}

const HorizontalBar = () => {

    const calculateTop = (index: number) => {
        const vw = (index * -10) + 20
        const vmin = (index * -4) + 8

        return `calc(${vw}vw + ${vmin}vmin)`


    }

    return <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        // justifyContent: 'space-around'
        height: '15vw',

        // padding: '2vmin'
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
            alignItems: 'center'
        }}>
            <div style={{ position: 'relative', top: calculateTop(4) }}>
                <VerticalBar />
            </div>
            <img style={{ height: '5vw', opacity: 0.5, }} src={require('./platformIcons/trade-arrow.svg')} />
            <div style={{ position: 'relative', top: calculateTop(1) }}>
                <VerticalBar />
            </div>
        </div>
        <div style={{}}>
            <img style={{ height: '5vw' }} src={require('./platformIcons/user.svg')} />
        </div>
    </div >
}

const VerticalBar = () => {
    return <div
        style={{

            textAlign: 'center'
        }}
    >
        <div style={{ padding: '2vmin', opacity: 0.1 }}>
            <img style={{ height: '10vw' }} src={require('./platformIcons/coin.svg')} />
        </div>
        <div style={{ padding: '2vmin', opacity: 0.1 }}>
            <img style={{ height: '10vw' }} src={require('./platformIcons/steam.svg')} />
        </div>
        <div style={{ padding: '2vmin' }}>
            <img style={{ height: '10vw' }} src={require('./platformIcons/playstation.svg')} />
        </div>
        <div style={{ padding: '2vmin', opacity: 0.1 }}>
            <img style={{ height: '10vw' }} src={require('./platformIcons/xbox.svg')} />
        </div>
        <div style={{ padding: '2vmin', opacity: 0.1 }}>
            <img style={{ height: '10vw' }} src={require('./platformIcons/switch.svg')} />
        </div>

    </div>
}