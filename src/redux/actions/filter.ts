export const category = (index) => ({
    type: 'SET_CATEGORY',
    payload: index
});

export const setSort = (name) => ({
    type: 'SET_SORT_BY',
    payload: name
})