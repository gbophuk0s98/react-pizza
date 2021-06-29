const initialState = {
    category: 0,
    sortBy: 'rating',
}

const filters = (state, action) => {

    if (state === undefined)
        return initialState

    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export default filters