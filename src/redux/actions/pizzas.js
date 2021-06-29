import axios from 'axios'

const fetchPizzas = () => dispatch => {
    dispatch({ type: 'FETCH_PIZZAS_REQUEST' })
    axios.get('http://localhost:3001/pizzas?_order=asc&_sort=price')
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