// @ts-nocheck

import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, RedditIcon, RedditShareButton } from 'react-share'


const IconProps = {
    round: true,
    size: 35
}

const ButtonProps = {
    url: 'https://rade.trade',
    style: {
        marginLeft: 10
    }
}

export default () => {
    return <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
        <FacebookShareButton quote='https://rade.trade - Create your game wishlist and find gamers that have what you want.'{...ButtonProps} >
            <FacebookIcon {...IconProps} />
        </FacebookShareButton>
        <TwitterShareButton hashtags={['gaming']} related={['rade_trade']} title='Rade - Create your game wishlist and find gamers that have what you want.' {...ButtonProps} >
            <TwitterIcon {...IconProps} />
        </TwitterShareButton>
        <RedditShareButton {...ButtonProps}>
            <RedditIcon bgStyle={{
                fill: '#ff4500'
            }} {...IconProps} />
        </RedditShareButton>
    </div>
}