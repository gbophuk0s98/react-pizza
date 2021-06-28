const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const pizzas = (state, action) => {

    if (state === undefined)
        return initialState

    switch (action.type) {

        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default pizzas