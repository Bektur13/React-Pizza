// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from 'axios';
// import type { Pizza, SortOption, PizzaState } from '../../types/pizza';
// import { category } from "./filter";

// export const fetchPizza = createAsyncThunk<Pizza[], { sort: SortOption; category: number | null }>(
//     'pizzas/fetchPizzas',
//     async ({ sort, category }) => {
//         const response = await axios.get<Pizza[]>(
//             `http://localhost:8001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sort.type
//             }&_order=${sort.order}`
//         );
//         return response.data;
//     }
// )

// export const createNewPizza = createAsyncThunk<void, Pizza>(
//     'pizza/createNewPizza',
//     async (pizza) => {
//         await fetch(`http://localhost:5000/add-pizza`, {
//             method: 'POST',
//             body: JSON.stringify(pizza),
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// )

// const initialState: PizzaState = {
//     items: [],
//     selectedSize: null,
//     selectedType: null,
//     status: 'idle',
//     error: null
// }

// const pizzaSlice = createSlice({
//     name: 'pizzas',
//     initialState,
//     reducers: {
//         incrementCount(state, action: PayloadAction<string>) {
//             console.log(`Increment pizza count for id: ${action.payload}`);
//         },
//         dropCount(state, action: PayloadAction<string>) {
//             console.log(`Drop pizza count for id: ${action.payload}`);
//         },
//         removeCounter(state, action: PayloadAction<string>) {
//             console.log(`Remove counter for id: ${action.payload}`);
//         },
//         setPizzaSize(state, action: PayloadAction<number>) {
//             state.selectedSize = action.payload;
//         },
//         setPizzaType(state, action: PayloadAction<number>) {
//             state.selectedType = action.payload;
//         },
//         setPizzas(state, action: PayloadAction<Pizza[]>) {
//             state.items = action.payload;
//         },
//     }
// });

// export const {
//     incrementCount,
//     dropCount,
//     removeCounter,
//     setPizzas,
//     setPizzaSize,
//     setPizzaType,
// } = pizzaSlice.actions;

// export default pizzaSlice.reducer;

import { Pizza } from "../../types/pizza";
import { SortOption } from "./filter";

export const ADD_CART = 'ADD_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const addCartAction = (pizzaObject: Pizza) => ({
    type: ADD_CART,
    payload: pizzaObject,
});

export const clearCartAction = () => ({
    type: CLEAR_CART,
});

export const plusCartAction = (id: any) => ({
    type: PLUS_CART_ITEM,
    payload: id
});

export const minusCartAction = (id: any) => ({
    type: MINUS_CART_ITEM,
    payload: id,
});

export const removeCartAction = (id: any) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
})