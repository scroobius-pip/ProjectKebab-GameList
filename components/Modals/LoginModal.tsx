import SocialLoginButton from '@components/SocialLoginButton';
import Router from 'next/router'

export default ({ errorMessage = '' }: { errorMessage: string }) => {

    return <div style={{ backgroundColor: '#353739', color: '#EAEBEB', padding: 25, textAlign: 'center' }}>
        <h2><strong>Login</strong></h2>
        <div style={{ width: '80%', margin: '0 auto', marginTop: 25 }}>
            <span style={{ padding: 10 }}>
                <SocialLoginButton color='#EA262B' image={require('../../assets/icons/reddit-white.svg')} onClick={() => window.open("https://auth.rade.trade/auth/reddit", "_self")} />

            </span>
            <span style={{ padding: 10 }}>
                <SocialLoginButton color='#2C2F33' image={require('../../assets/icons/steam.svg')} onClick={() => window.open("https://auth.rade.trade/auth/steam", "_self")} />

            </span>
        </div>
        <div style={{ marginTop: 10 }}>
            <p style={{ color: '#FF0055' }}>{errorMessage}</p>
        </div>
        <div>
            {/* <p>By signing in you agree to nakama's <a href='terms.io'>terms and conditions</a></p> */}
            <p>Sign in to create your game list and easily find trade partners</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href='https://discord.gg/kWxa4Jr'>

                <img style={{ height: '2em' }} src={require('../../assets/icons/discord-icon.svg')} />
            </a>


        </div>
    </div >


}