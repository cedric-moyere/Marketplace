import { LOGIN, SIGNOUT } from "../actions/actionTypes";

const initialState = {
  current: JSON.parse(localStorage.getItem("user")),
  error: null,
};
const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      if (state.current) {
        return state;
      }
      return {
        current: payload.user,
        error: payload.error,
      };
    case SIGNOUT:
      return initialState;
    default:
      return state;
  }
};
export default user;
