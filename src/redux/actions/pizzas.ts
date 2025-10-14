// import axios from 'axios';

// export const pizzaCount = (id) => ({
//     type: 'INCREMENT_COUNT',
//     payload: id
// });

// export const dropCount = (id) => ({
//     type: 'DROP_COUNTER',
//     payload: id
// });


// export const removeCounter = (id) => ({
//   type: 'REMOVE_COUNTER',
//   payload: id,
// });

// export const pizzaSizesAction = (size) => ({
//   type: 'SET_PIZZA_SIZE',
//   payload: size,
// });

// export const pizzaTypesAction = (activeType) => ({
//   type: 'SET_PIZZA_TYPE',
//   payload: activeType,
// });

// export const setPizzasAction = (pizzaArray) => ({
//   type: 'SET_PIZZAS',
//   payload: pizzaArray,
// });

// export const fetchPizzasAction = (sort, category) => async (dispatch) => {
//   console.log(category);
//   const response = await axios.get(
//     `http://localhost:8001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
//       sort.type
//     }&_order=${sort.order}`,
//   );
//   await dispatch(setPizzasAction(response.data));
// };

// export const CreateNewPizza = async (pizza) => {
//   const response = await fetch(`http://localhost:5000/add-pizza`, {
//     method: 'POST',
//     body: JSON.stringify(pizza),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const json = await response.json();
// };


import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import type { Pizza, SortOption, PizzaState } from '../../types/pizza';
import { category } from "./filter";

export const fetchPizza = createAsyncThunk<Pizza[], { sort: SortOption; category: number | null }>(
    'pizzas/fetchPizzas',
    async ({ sort, category }) => {
        const response = await axios.get<Pizza[]>(
            `http://localhost:8001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sort.type
            }&_order=${sort.order}`
        );
        return response.data;
    }
)

export const createNewPizza = createAsyncThunk<void, Pizza>(
    'pizza/createNewPizza',
    async (pizza) => {
        await fetch(`http://localhost:5000/add-pizza`, {
            method: 'POST',
            body: JSON.stringify(pizza),
            headers: { 'Content-Type': 'application/json' },
        });
    }
)

const initialState: PizzaState = {
    items: [],
    selectedSize: null,
    selectedType: null,
    status: 'idle',
    error: null
}

const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        incrementCount(state, action: PayloadAction<string>) {
            console.log(`Increment pizza count for id: ${action.payload}`);
        },
        dropCount(state, action: PayloadAction<string>) {
            console.log(`Drop pizza count for id: ${action.payload}`);
        },
        removeCounter(state, action: PayloadAction<string>) {
            console.log(`Remove counter for id: ${action.payload}`);
        },
        setPizzaSize(state, action: PayloadAction<number>) {
            state.selectedSize = action.payload;
        },
        setPizzaType(state, action: PayloadAction<number>) {
            state.selectedType = action.payload;
        },
        setPizzas(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload;
        },
    }
});

export const {
    incrementCount,
    dropCount,
    removeCounter,
    setPizzas,
    setPizzaSize,
    setPizzaType,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;