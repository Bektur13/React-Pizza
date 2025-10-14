import axios from 'axios';

export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DROP_COUNTER = 'DROP_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const SET_PIZZA_SIZE = 'SET_PIZZA_SIZE';
export const SET_PIZZA_TYPE = 'SET_PIZZA_TYPE';
export const SET_PIZZAS = 'SET_PIZZAS';

export const pizzaCount = (id: number) => ({
    type: INCREMENT_COUNT,
    payload: id,
});

export const dropCount = (id: number) => ({
    type: DROP_COUNTER,
    payload: id,
})

export const removeCounter = (id: number) => ({
    type: REMOVE_COUNTER,
    payload: id,
})

export const pizzaSizesAction = (size: any) => ({
    type: SET_PIZZA_SIZE,
    payload: size,
});

export const pizzaTypesAction = (activeType : any) => ({
    type: SET_PIZZA_TYPE,
    payload: activeType,
})

export const setPizzasAction = (pizzaArray: object)  => ({
    type: SET_PIZZAS,
    payload: pizzaArray,
})

export const fetchPizzasAction = (sort: any, category: any) => async (dispatch: any) => {
  console.log(category);
  const response = await axios.get(
    `http://localhost:8001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
      sort.type
    }&_order=${sort.order}`,
  );
  await dispatch(setPizzasAction(response.data));
};

export const CreateNewPizza = async (pizza: any) => {
  const response = await fetch(`http://localhost:5000/add-pizza`, {
    method: 'POST',
    body: JSON.stringify(pizza),
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await response.json();
};

