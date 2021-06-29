import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCategory } from '../../redux/actions/filters'
import { fetchPizzas } from '../../redux/actions/pizzas'

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../../components'

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortPopupItems = [
    { label: 'популярности', type: 'popular' },
    { label: 'цене', type: 'price' },
    { label: 'алфавиту', type: 'alphabet' }
]

const HomePage = () => {

    const dispatch = useDispatch()
    const pizzas = useSelector(({ pizzas }) => pizzas.items)
    const loading = useSelector(({ pizzas }) => pizzas.isLoading)

    const onSelectCategory = React.useCallback((idx) => dispatch(setCategory(idx)), [dispatch])

    React.useEffect(() => {
        if (!pizzas.length)
            dispatch(fetchPizzas())
    }, [dispatch, pizzas])


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
                    {!loading
                        ? pizzas.map(pizza => <PizzaBlock isLoading={loading} key={pizza.id} {...pizza} />)
                        : Array(10).fill(<LoadingBlock />)}
                </div>
            </main>
        </>
    )
}

export default HomePage