import React from 'react'


import {HeaderStyled, LinkStyled} from './Header.styles'

const Header = () => {
    return (
        <HeaderStyled>
            <h1>CoinCap</h1>
            <nav>
                <ul>
                    <li><LinkStyled to='/'>Main</LinkStyled></li>
                    <li><LinkStyled to='/markets'>Markets</LinkStyled></li>
                    <li><LinkStyled to='/exchanges'>Exchanges</LinkStyled></li>
                </ul>
            </nav>
        </HeaderStyled>
    )
}

export default Header
