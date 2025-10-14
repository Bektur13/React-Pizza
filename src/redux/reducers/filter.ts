import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    category: string | null,
    sortBy: object
}

const initialState: FilterState = {
    category: null,
    sortBy: {
        type: 'popular',
        sort: 'desc'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        setSortBy(state, action: PayloadAction<object>) {
            state.sortBy = action.payload;
        }
    }
});

export const { setCategory, setSortBy } = filterSlice.actions;
export default filterSlice.reducer;