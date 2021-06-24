import React from 'react'

import cartIcon from '../../assets/cart.svg'

class Button extends React.Component {

    componentDidMount() {
        console.log('did Mount!')
    }

    render() {
        return (
            <a className="header__header-cart-button" href="./cart.html">
                <div className="header__header-cart-button-cost">520 P</div>
                <div className="header__header-cart-button-cart">
                    <img className="header__header-cart-button-cart-icon" src={cartIcon} width="16" height="16" alt="cart icon" />3
                </div>
            </a>
        )
    }
}

export default Button