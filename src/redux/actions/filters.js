import { fetchPizzas } from './pizzas'

const setSortBy = sortBy => ({
    type: 'SET_SORT_BY',
    payload: sortBy
})

const setCategory = categoryIdx => dispatch => {
    dispatch({
        type: 'SET_CATEGORY',
        payload: categoryIdx
    })
    dispatch(fetchPizzas(false))
}

export {
    setSortBy,
    setCategory
}