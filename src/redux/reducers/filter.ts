// const initialState = {
//     category: null,
//     sort: {
//         type: 'popular',
//         order: 'desc',
//     },
// };

// const filters = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_CATEGORY': {
//             return {
//                 ...state,
//                 category: action.payload,
//             };
//         }
//         case 'SET_SORT_BY': {
//             return {
//                 ...state,
//                 sort: action.payload,
//             }
//         }
//         default: {
//             return state;
//         }
//     }
// };

// export default filters;


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