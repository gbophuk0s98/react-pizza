const setSortBy = sortBy => ({
    type: 'SET_SORT_BY',
    payload: sortBy
})

const setCategory = categoryIdx => dispatch => {
    dispatch({
        type: 'SET_CATEGORY',
        payload: categoryIdx
    })
}

export {
    setSortBy,
    setCategory
}