import { AUTH_SET_LOADING, LOGIN, LOGIN_FAILURE, LOGOUT } from "../types";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
var endPoint = RepositoryFactory.get("endPoint")

export const loginLoading = (value) => async (dispatch) => {
  dispatch({
    type: AUTH_SET_LOADING,
    payload: value
  })
}


export const login = (email, password) => async (dispatch) => {
  console.log(email, password, 'data')
  try {
    dispatch(loginLoading(true));
    const response = await endPoint.login(email, password)
    const data = await response.data;
    if (response.statusText == "OK") {
      dispatch(loginLoading(false));
      dispatch({ type: LOGIN, payload: data });
    }
  } catch (error) {
    alert("something goes wrong or maybe invalid user")
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
