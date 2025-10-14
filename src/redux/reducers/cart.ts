// const initialState = {
//     items: {},
//     totalPrice: 0,
//     totalCount: 0
// }

// const getTotalPrice = (arr) => {
//     return arr.reduce((sum, obj) => obj.price + sum, 0);
// };

// const _get = (obj, path) => {
//     const [firstKey, ...keys] = path.split('.');
//     return keys.reduce((val, key) => {
//         return val[key];
//     }, obj[firstKey]);
// };

// const getTotalSum = (obj, path) => {
//   return Object.values(obj).reduce((sum, obj) => {
//     const value = _get(obj, path);
//     return sum + value;
//   }, 0);
// };

// const cart = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_CART': {
//       const savedPizzas = !state.items[action.payload.id]
//         ? [action.payload]
//         : [...state.items[action.payload.id].items, action.payload];

//       const newPizzas = {
//         ...state.items,
//         [action.payload.id]: {
//           items: savedPizzas,
//           totalPrice: getTotalPrice(savedPizzas),
//         },
//       };

//       const totalCount = getTotalSum(newPizzas, 'items.length');
//       const totalPrice = getTotalSum(newPizzas, 'totalPrice');

//       return {
//         ...state,
//         items: newPizzas,
//         totalCount,
//         totalPrice,
//       };
//     }
//     case 'CLEAR_CART': {
//       return {
//         ...state,
//         items: {},
//         totalPrice: 0,
//         totalCount: 0,
//       };
//     }
//     case 'PLUS_CART_ITEM':
//       const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

//       const newPizzas = {
//         ...state.items,
//         [action.payload]: {
//           items: newItems,
//           totalPrice: getTotalPrice(newItems),
//         },
//       };

//       const totalCount = getTotalSum(newPizzas, 'items.length');
//       const totalPrice = getTotalSum(newPizzas, 'totalPrice');

//       return {
//         ...state,
//         items: newPizzas,
//         totalCount,
//         totalPrice,
//       };
//     case 'MINUS_CART_ITEM': {
//       const oldItems = state.items[action.payload].items;
//       const newObjItems =
//         oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

//       const newItems = {
//         ...state.items,
//         [action.payload]: { items: newObjItems, totalPrice: getTotalPrice(newObjItems) },
//       };

//       const totalCount = getTotalSum(newItems, 'items.length');
//       const totalPrice = getTotalSum(newItems, 'totalPrice');
//       return {
//         ...state,
//         items: newItems,
//         totalCount,
//         totalPrice,
//       };
//     }
//     case 'REMOVE_CART_ITEM': {
//       const newItems = { ...state.items };
//       const currentPrice = newItems[action.payload].totalPrice;
//       const currentCount = newItems[action.payload].items.length;

//       delete newItems[action.payload];

//       return {
//         ...state,
//         items: newItems,
//         totalPrice: state.totalPrice - currentPrice,
//         totalCount: state.totalCount - currentCount,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default cart;




import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartState, PizzaItem } from "../../types/cart";

const getTotalPrice = (arr: PizzaItem[]): number => {
    return arr.reduce((sum, obj) => obj.price + sum, 0);
}

const getTotalSum = <T extends Record<string, any>>(obj: T, path: string): number => {
  const _get = (obj: any, path: string) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => val[key], obj[firstKey]);
  };

  return Object.values(obj).reduce((sum, val) => {
    const value = _get(val, path);
    return sum + value;
  }, 0);
};

const initialState: CartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action: PayloadAction<PizzaItem>) {
            const item = action.payload;

            const savedPizzas = !state.items[item.id] ? [item] : [...state.items[item.id].items, item];

            const newItems = {
                ...state.items,
                [item.id]: {
                    items: savedPizzas,
                    totalPrice: getTotalPrice(savedPizzas),
                }
            };

            state.items = newItems;
            state.totalCount = getTotalSum(newItems, 'items.length');
            state.totalPrice = getTotalSum(newItems, 'totalPrice');
        },
    }
})