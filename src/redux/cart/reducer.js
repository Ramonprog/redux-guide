import CartActionTypes from "./actions-types";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      //verificar se o produto ja existe no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      //se estiver no carrinho, aumentar a quantidade
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      //se nao estiver no carrinho, adicionar o produto

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      //remover o produto do carrinho
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );

      return {
        ...state,
        products: updatedProducts,
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
