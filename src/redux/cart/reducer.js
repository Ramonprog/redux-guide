import CartActionTypes from "./actions-types";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return { ...initialState, products: [...state.products, action.payload] };

    default:
      return state;
  }
};

export default cartReducer;