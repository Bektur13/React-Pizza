export const category = (index: number) => ({
    type: 'SET_CATEGORY',
    payload: index
});

export const setSort = (name: string) => ({
    type: 'SET_SORT_BY',
    payload: name
})