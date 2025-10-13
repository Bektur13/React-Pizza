const initialState = {
  items: {},
  pizzaItems: [],
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS': {
      return {
        ...state,
        pizzaItems: action.payload,
      };
    }
    case 'INCREMENT_COUNT': {
      const savedCounter = !state.items[action.payload] ? 1 : state.items[action.payload].count + 1;

      const newCounter = {
        ...state.items,
        [action.payload]: {
          ...state.items[action.payload],
          count: savedCounter,
        },
      };
      return {
        ...state,
        items: newCounter,
      };
    }
    case 'DROP_COUNTER': {
      return {
        ...state,
        items: {},
      };
    }
    case 'REMOVE_COUNTER': {
      const counterItems = { ...state.items };
      delete counterItems[action.payload];

      return {
        ...state,
        items: counterItems,
      };
    }
    case 'SET_PIZZA_SIZE': {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            count: action.payload.count,
            size: action.payload.size,
          },
        },
      };
    }
    case 'SET_PIZZA_TYPE': {
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            count: action.payload.count,
            type: action.payload.type,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default pizzas;
