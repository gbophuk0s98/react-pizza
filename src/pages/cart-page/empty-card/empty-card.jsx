import React from 'react'
import { Link } from 'react-router-dom'

import cartPng from '../../../assets/empty-cart.png'
import smile from '../../../assets/smile.png'

const EmptyCard = () => {
    return (
        <main className="empty-cart-content">

            <div className="empty-cart-content__title">
                <span className="empty-cart-content__title-text">Корзина пустая</span>
                <img src={smile} alt="smile" />
            </div>

            <div className="empty-cart-content__description">
                <span className="empty-cart-content__description-first-line">
                    Вероятней всего, вы ещё не заказывали пиццу.
                </span>
                <span className="empty-cart-content__description-second-line">
                    Для того, чтобы заказать пиццу, перейдите на главную страницу.
                </span>
            </div>

            <div className="empty-cart-content__big-image">
                <img src={cartPng} alt="cart" />
            </div>

            <Link to='/'>
                <div className="empty-cart-content__footer">
                    <div className="empty-cart-content__footer-button">
                        Вернуться назад
                    </div>
                </div>
            </Link>

        </main>
    )
}

export default EmptyCard