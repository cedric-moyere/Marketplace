import { getProducts, addProduct } from "../../service";
import {
  getProductsPending,
  getProductsSuccess,
  getProductsFailure,
  addProductSuccess,
  addProductFailure,
} from "./index";

const returnProductsArrays = (items) => {
  let TwoDimensionalArray = [];
  let remainder = items.length % 9;
  let i = 0;
  while (i < items.length - remainder) {
    let array = items.slice(i, i + 9);
    TwoDimensionalArray.push(array);
    i += 9;
  }
  const array = items.slice(i);
  TwoDimensionalArray.push(array);
  return TwoDimensionalArray;
};

// Networking
export function fetchProducts() {
  return async function (dispatch) {
    dispatch(getProductsPending());
    getProducts()
      .then((response) => returnProductsArrays(response.data))
      .then((data) => dispatch(getProductsSuccess(data)))
      .catch((err) => dispatch(getProductsFailure(err)));
  };
}
export function createProduct(product) {
  return async function (dispatch) {
    addProduct(product)
      .then(() => dispatch(addProductSuccess()))
      .catch((err) => dispatch(addProductFailure(err)));
  };
}
