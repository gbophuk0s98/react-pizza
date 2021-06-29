import axios from 'axios'

const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch({ type: 'FETCH_PIZZAS_REQUEST' })
    axios.get(`http://localhost:3001/pizzas?${(category ? `category=${category}` : '') + `&_sort=${sortBy}&_order=asc`}`)
        .then(res => dispatch(setPizzas(res.data)))
}

const setPizzas = items => ({
    type: 'FETCH_PIZZAS_SUCCESS',
    payload: items
})

export {
    setPizzas,
    fetchPizzas,
}