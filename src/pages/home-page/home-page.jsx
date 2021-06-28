import React, { useEffect, useState } from 'react'

import { Categories, SortPopup } from '../../components'

import pizza from '../../assets/pizza.png'

const HomePage = () => {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {

    }, [])

    return (
        <>
            <section className="selection">
                <Categories
                    items={[
                        'Все',
                        'Мясные',
                        'Вегетарианские',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]}
                    onClick={name => console.log(`hello ${name}`)}
                />
                <SortPopup
                    items={[
                        'популярности',
                        'цене',
                        'алфавиту'
                    ]}
                />
            </section>

            <main className="main">
                <div className="main__title">Все пиццы</div>

                <div className="main__pizza-list">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(e => {
                        return (
                            <div className="main__pizza-list-item" key={e}>
                                <div className="main__pizza-list-item-img">
                                    <img src={pizza} alt="pizza" width="260px" height="260px" />
                                </div>
                                <div className="main__pizza-list-item-title">Чизбургер-пицца</div>
                                <div className="main__pizza-list-item-selection">
                                    <div className="main__pizza-list-item-selection-pastry">
                                        <span className="main__pizza-list-item-selection-pastry-button">
                                            тонкое
                                        </span>
                                        <span className="main__pizza-list-item-selection-pastry-button">
                                            традиционное
                                        </span>
                                    </div>
                                    <div className="main__pizza-list-item-selection-pastry" onClick={e => console.log('Hello')}>
                                        <span className="main__pizza-list-item-selection-pastry-button">
                                            26 см.
                                        </span>
                                        <span className="main__pizza-list-item-selection-pastry-button">
                                            30 см.
                                        </span>
                                        <span className="main__pizza-list-item-selection-pastry-button">
                                            40 см.
                                        </span>
                                    </div>
                                </div>
                                <div className="main__pizza-list-item-cost">
                                    <div className="main__pizza-list-item-cost-text">от 13,90 р</div>
                                    <div className="main__pizza-list-item-cost-button">+ Добавить</div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </main>
        </>
    )
}

export default HomePage