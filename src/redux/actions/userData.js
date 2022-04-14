import * as API from "../../api";
import { FETCH_ALL } from "../constants";

export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await API.fetchData();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
};
