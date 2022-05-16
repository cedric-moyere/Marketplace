import { addOrder } from "../../service";
import { checkout } from "./index";

export function saveOrder(order) {
  return async function (dispatch) {
    addOrder(order)
      .then(() => dispatch(checkout()))
      .catch((err) => console.log(err));
  };
}