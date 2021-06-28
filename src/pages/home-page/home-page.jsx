import React from 'react'

import { Categories, SortPopup, PizzaBlock } from '../../components'

const HomePage = ({ items }) => {

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
                        { name: 'популярности', type: 'popular' },
                        { name: 'цене', type: 'price' },
                        { name: 'алфавиту', type: 'alphabet' }
                    ]}
                />
            </section>

            <main className="main">
                <div className="main__title">Все пиццы</div>

                <div className="main__pizza-list">
                    {items && items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
                </div>
            </main>
        </>
    )
}

export default HomePage