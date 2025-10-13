import axios from 'axios';

export const pizzaCount = (id) => ({
    type: 'INCREMENT_COUNT',
    payload: id
});

export const dropCount = (id) => ({
    type: 'DROP_COUNTER',
    payload: id
});


export const removeCounter = (id) => ({
  type: 'REMOVE_COUNTER',
  payload: id,
});

export const pizzaSizesAction = (size) => ({
  type: 'SET_PIZZA_SIZE',
  payload: size,
});

export const pizzaTypesAction = (activeType) => ({
  type: 'SET_PIZZA_TYPE',
  payload: activeType,
});

export const setPizzasAction = (pizzaArray) => ({
  type: 'SET_PIZZAS',
  payload: pizzaArray,
});

export const fetchPizzasAction = (sort, category) => async (dispatch) => {
  console.log(category);
  const response = await axios.get(
    `http://localhost:8001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
      sort.type
    }&_order=${sort.order}`,
  );
  await dispatch(setPizzasAction(response.data));
};

export const CreateNewPizza = async (pizza) => {
  const response = await fetch(`http://localhost:5000/add-pizza`, {
    method: 'POST',
    body: JSON.stringify(pizza),
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await response.json();
};
