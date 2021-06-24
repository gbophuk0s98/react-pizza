import React from 'react'

import logo from '../../assets/pizza-logo.svg';

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
            <div className="header__header-cart">
                <a className="header__header-cart-button" href="./cart.html">
                    <div className="header__header-cart-button-cost">520 P</div>
                    <div className="header__header-cart-button-cart">3</div>
                </a>
            </div>
        </header>
    )
}

export default Header