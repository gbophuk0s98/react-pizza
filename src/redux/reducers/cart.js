const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getVariables = (state, action) => {
    const items = [...state.items[action.payload.pizzaIdx] || []]

    const idx = items.findIndex(({ name, size, type }) =>
        name === action.payload.name
        && size === action.payload.size
        && type === action.payload.type)

    return { items, idx }
}

const addPizza = (state, action) => {
    let pizza = { ...action.payload },
        newItems = []

    const { items, idx } = getVariables(state, action)

    if (idx !== -1) {
        const duplicate = items[idx]

        pizza = { ...pizza, count: duplicate.count + 1, fullPrice: duplicate.fullPrice + duplicate.price }
        newItems = [
            ...items.slice(0, idx),
            pizza,
            ...items.slice(idx + 1)
        ]
    } else
        newItems = [...items, pizza]
    return {
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
        items: {
            ...state.items,
            [action.payload.pizzaIdx]: newItems
        }
    }
}

const deletePizza = (state, action) => {

    const { items, idx } = getVariables(state, action)

    const { count, fullPrice } = items[idx]

    const newItems = [
        ...items.slice(0, idx),
        ...items.slice(idx + 1)
    ]

    return {
        totalPrice: state.totalPrice - fullPrice,
        totalCount: state.totalCount - count,
        items: {
            ...state.items,
            [action.payload.pizzaIdx]: newItems
        }
    }
}

const deleteOnePizza = (state, action) => {

    const { items, idx } = getVariables(state, action)
    let pizza = { ...action.payload }

    if (items[idx].count === 1)
        return deletePizza(state, action)

    const updatePizza = {
        ...pizza,
        count: pizza.count - 1,
        fullPrice: pizza.fullPrice - pizza.price
    }

    const newItems = [
        ...items.slice(0, idx),
        updatePizza,
        ...items.slice(idx + 1),
    ]

    return {
        totalPrice: state.totalPrice - updatePizza.price,
        totalCount: state.totalCount - 1,
        items: {
            ...state.items,
            [action.payload.pizzaIdx]: newItems
        }
    }
}

const cart = (state, action) => {

    if (state === undefined)
        return initialState

    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            return addPizza(state, action)
        case 'DELETE_CART':
            return initialState
        case 'DETELE_PIZZA':
            return deletePizza(state, action)
        case 'DELETE_ONE_PIZZA':
            return deleteOnePizza(state, action)
        default:
            return state
    }
}

export default cart