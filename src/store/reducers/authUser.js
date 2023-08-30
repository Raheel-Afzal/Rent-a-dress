import { AUTH_SET_LOADING, LOGIN, LOGOUT, UPDATE_PROFILE } from "../types";

const initialState = {
  user: null,
  uid: null,
  loading: false,
};


export default function authUserReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: payload
      };
    case LOGIN:
      return {
        ...state,
        user: payload,
        uid: payload.id
      };

    case LOGOUT:
      localStorage.removeItem("auth");
      return {
        ...state,
        user: null,
        uid: null,
      };
    case UPDATE_PROFILE:
      // For Example, any thing
      return {
        ...state,
        user: payload,
      };
    default:
      return { ...state };
  }
}
