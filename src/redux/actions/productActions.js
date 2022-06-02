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

export const addCart = (product) => {
  return {
    type: actionTypes.ADD_CART,
    payload: product,
  };
};
export const deleltCart = (id) => {
  return {
    type: actionTypes.DELETE_CART,
    payload: id,
  };
};
export const removeAllCart = (product) => {
  return {
    type: actionTypes.REMOVE_ALL_CART,
    payload: product,
  };
};
