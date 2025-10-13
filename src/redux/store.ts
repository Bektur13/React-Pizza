import { configureStore } from "@reduxjs/toolkit";
import filters from "./reducers/filter";
import cart from "./reducers/cart";
import pizzas from "./reducers/pizzas";

export const store = configureStore({
    reducer: {
        filters: filters,
        cart: cart,
        pizzas: pizzas
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;