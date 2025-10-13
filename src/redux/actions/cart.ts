export const addCartAction = (pizzaObject) => ({
    type: 'ADD_CART',
    payload: pizzaObject
});

export const clearCartAction = () => ({
    type: 'CLEAR_ITEM'
});

export const plusCartAction = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});

export const minusCartAction = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});

export const removeCartAction = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});