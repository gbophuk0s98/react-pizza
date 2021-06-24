import React from 'react'

import Button from '../button'

import logo from '../../assets/pizza-logo.svg'

const Header = () => {

    return (
        <header className="header">
            <div className="header__header-logo">
                <img className="header__header-logo-icon" src={logo} alt="logo" />
                <div className="header__header-logo-description">
                    <span className="header__header-logo-description-title">
                        react pizza
                    </span>
                    <span className="header__header-logo-description-text">
                        самая вкусная пицца во вселенной
                    </span>
                </div>
            </div>
            <div className="header__header-cart" onClick={e => console.log('qwerty')}>
                <Button />
            </div>
        </header>
    )
}

export default Header