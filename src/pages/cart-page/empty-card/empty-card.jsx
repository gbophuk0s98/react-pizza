import React from 'react'
import { Link } from 'react-router-dom'

import cartPng from '../../../assets/empty-cart.png'
import smile from '../../../assets/smile.png'

const EmptyCard = () => {
    return (
        <main class="empty-cart-content">

            <div class="empty-cart-content__title">
                <span class="empty-cart-content__title-text">Корзина пустая</span>
                <img src={smile} alt="smile" />
            </div>

            <div class="empty-cart-content__description">
                <span class="empty-cart-content__description-first-line">
                    Вероятней всего, вы ещё не заказывали пиццу.
                </span>
                <span class="empty-cart-content__description-second-line">
                    Для того, чтобы заказать пиццу, перейдите на главную страницу.
                </span>
            </div>

            <div class="empty-cart-content__big-image">
                <img src={cartPng} alt="cart" />
            </div>

            <Link to='/'>
                <div class="empty-cart-content__footer">
                    <div class="empty-cart-content__footer-button">
                        Вернуться назад
                    </div>
                </div>
            </Link>

        </main>
    )
}

export default EmptyCard