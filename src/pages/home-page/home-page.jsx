import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../../redux/actions/filters'

import { Categories, SortPopup, PizzaBlock } from '../../components'

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortPopupItems = [
    { label: 'популярности', type: 'popular' },
    { label: 'цене', type: 'price' },
    { label: 'алфавиту', type: 'alphabet' }
]

const HomePage = () => {

    const dispatch = useDispatch()
    const pizzas = useSelector(({ pizzas }) => pizzas.items)

    const onSelectCategory = React.useCallback((idx) => dispatch(setCategory(idx)), [])

    return (
        <>
            <section className="selection">
                <Categories
                    items={categories}
                    onClick={onSelectCategory}
                />
                <SortPopup
                    items={sortPopupItems}
                />
            </section>

            <main className="main">
                <div className="main__title">Все пиццы</div>

                <div className="main__pizza-list">
                    {pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
                </div>
            </main>
        </>
    )
}

export default HomePage