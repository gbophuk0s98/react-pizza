import React from 'react'

import { Categories, SortPopup, PizzaBlock } from '../../components'

const HomePage = ({ pizzas }) => {

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
                    {pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)}
                </div>
            </main>
        </>
    )
}

export default HomePage