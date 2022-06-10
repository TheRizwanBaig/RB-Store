import { actionTypes } from "./actionTypes";

export const setProduct = (product) => {
  return {
    type: actionTypes.SET_PRODUCT,
    payload: product,
  };
};
export const filterProduct = (product) => {
  return {
    type: actionTypes.FILTER_PRODUCT,
    payload: product ,
  };
};
export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REVOME_SELECTED_PRODUCT,
  };
};

export const addToCart = (cartProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartProduct,
  };
};
export const incCart = (inc) => {
  return {
    type: actionTypes.INC_CART,
    payload: inc,
  };
};
export const decCart = (dec) => {
  return {
    type: actionTypes.DEC_CART,
    payload: dec,
  };
};
export const deleltCart = (id) => {
  return {
    type: actionTypes.DELETE_CART,
    payload: id,
  };
};
export const removeAllCart = () => {
  return {
    type: actionTypes.REMOVE_ALL_CART,
  };
};
