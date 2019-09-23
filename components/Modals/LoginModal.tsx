import SocialLoginButton from '@components/SocialLoginButton';

export default () => {

    return <div style={{ backgroundColor: '#353739', color: '#EAEBEB', padding: 25, textAlign: 'center' }}>
        <h2><strong>Login</strong></h2>
        <div style={{ width: '80%', margin: '0 auto', marginTop: 25 }}>
            <span style={{ padding: 10 }}>
                <SocialLoginButton color='#EA262B' image={require('../../assets/icons/reddit-white.svg')} />

            </span>
            <span style={{ padding: 10 }}>
                <SocialLoginButton color='#2C2F33' image={require('../../assets/icons/steam.svg')} />

            </span>
        </div>
        <div style={{ marginTop: 10 }}>
            <p style={{ color: '#FF0055' }}>This reddit account is banned</p>
        </div>
        <div>
            <p>By signing in you agree to nakama's <a href='terms.io'>terms and conditions</a></p>
        </div>
    </div >


}