const initialState = {
    items: [],
    isLoading: true,
    error: null,
}

const pizzas = (state, action) => {

    if (state === undefined)
        return initialState

    switch (action.type) {
        case 'FETCH_PIZZAS_REQUEST':
            return {
                ...state,
                isLoading: true,
            }
        case 'FETCH_PIZZAS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        default:
            return state
    }
}

export default pizzas