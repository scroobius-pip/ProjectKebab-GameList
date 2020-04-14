import React from 'react'
import { colors } from 'styles'
import { StyledNavItem } from '@components/NavBar'
import Link from 'next/link';

export default () => {
    return <footer style={{
        display: 'flex', flexDirection: 'row', paddingTop: 100,
        width: '100%',

    }}>
        <div className='footer-logo-section' style={{ padding: '5px 10px 5px 10px', display: 'flex', alignItems: 'center' }}>
            <Link href="/">

                <img style={{ height: '1em', }} src={require('../../assets/icons/logo.svg')} />
            </Link>
        </div>
        <div style={{ backgroundColor: colors.overlay, padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
            {/* <StyledNavItem activeStyle={{ borderRightWidth: 4 }} inactiveStyle={{ color: colors.text }} href='/about'>About</StyledNavItem> */}
            <StyledNavItem activeStyle={{ borderRightWidth: 4 }} inactiveStyle={{ color: colors.text }} href='/terms-conditions'>Terms</StyledNavItem>
            <StyledNavItem activeStyle={{ borderRightWidth: 4 }} inactiveStyle={{ color: colors.text }} href='/privacy-policy'>Privacy</StyledNavItem>
        </div>
        <style jsx>
            {`
            .footer-logo-section {
                background-color:${colors.section};
                cursor:pointer;
                transition: all 0.3s cubic-bezier(0.42, 0, 0.71, 1.1);
            }

            .footer-logo-section:hover{
                background-color:${colors.primary};
            }
            `}
        </style>
    </footer>
}