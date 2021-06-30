const addPizzaToCart = pizza => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: pizza
})

const deleteCart = () => ({
    type: 'DELETE_CART'
})

const deletePizza = pizza => ({
    type: 'DETELE_PIZZA',
    payload: pizza
})

const deleteOnePizza = pizza => ({
    type: 'DELETE_ONE_PIZZA',
    payload: pizza
})


export {
    addPizzaToCart,
    deleteCart,
    deletePizza,
    deleteOnePizza,
}