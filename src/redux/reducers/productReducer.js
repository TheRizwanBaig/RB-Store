import { actionTypes } from "../actions/actionTypes";
const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return { ...state, products: payload };
    case actionTypes.FILTER_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REVOME_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
export const cartProductReducer = (
  state = { cartProducts: [] },
  { type, payload}
) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return { ...state, cartProducts: payload };

    case actionTypes.INC_CART:
      return { ...state, cartProducts: state.cartProducts.map(product => 
        payload === product.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
      };
    case actionTypes.DEC_CART:
      return { ...state, cartProducts: state.cartProducts.map(product => 
        payload === product.id
          ? { ...product, quantity:  Math.max(1, product.quantity - 1) }
          : product
      )
      };

    case actionTypes.DELETE_CART:
      const newList = state.cartProducts.filter(
        (curVal) => curVal.id !== payload
      );
      return { ...state, cartProducts: newList };
    case actionTypes.REMOVE_ALL_CART:
      return { cartProducts: [] };
    default:
      return state;
  }
};
