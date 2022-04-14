import { AUTH } from "../constants";

export const signup = (data, history) => (dispatch) => {
  try {
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};

export const signin = (data, history) => (dispatch) => {
  try {
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};
