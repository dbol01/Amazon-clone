export const initialState = {
  basket: [],
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload.item],
      };
    case "REMOVE_FROM_BASKET":
      const idx = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      const newBasket = [...state.basket];

      if (idx >= 0) {
        newBasket.splice(idx, 1);
      } else {
        console.warn(
          `Unable to move product with id: ${action.payload.id}, from the basket as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
