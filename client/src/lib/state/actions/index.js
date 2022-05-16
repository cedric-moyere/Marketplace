import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PAGE_INDEX,
  UPDATE_CART,
  CHECKOUT,
  SET_DELIVERY_CHOICE,
} from "./actionTypes";

// Products
export function getProductsPending() {
  return {
    type: GET_PRODUCTS_PENDING,
  };
}
export function getProductsSuccess(data) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: { data },
  };
}
export function getProductsFailure(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: { error },
  };
}
export function addProductSuccess() {
  return {
    type: ADD_PRODUCT_SUCCESS,
  };
}
export function addProductFailure(error) {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: { error },
  };
}

// Cart
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: { product },
  };
}
export function updateCart(id, quantity) {
  return {
    type: UPDATE_CART,
    payload: { id, quantity },
  };
}
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: { id },
  };
}

// Order
export function setDelivery(choice) {
  return {
    type: SET_DELIVERY_CHOICE,
    payload: { choice },
  };
}
export function checkout() {
  return {
    type: CHECKOUT,
  };
}
export function setPage(index) {
  return {
    type: SET_PAGE_INDEX,
    payload: { index },
  };
}
