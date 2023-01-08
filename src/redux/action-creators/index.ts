import axios from "axios";
import { Dispatch } from "react";
import { Actions, ActionTypes, IData } from "../../types";

export const fetchData = (term: string, filter: string) => async (dispatch: Dispatch<Actions>) => {
  try {
    dispatch({ type: ActionTypes.FETCH_DATA });
    const termItem = `q=${term}`;
    const filterItem = `country=${filter}`;
    const response = await axios.get<IData[]>(`/coffee?${term && termItem}&${filter && filterItem}`);
    dispatch({
      type: ActionTypes.FETCH_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_DATA_ERROR,
      payload: "Error, something went wrong...",
    });
  }
};

export const fetchDataItem = (id: string | undefined) => async (dispatch: Dispatch<Actions>) => {
  try {
    dispatch({ type: ActionTypes.FETCH_DATA });
    const response = await axios.get<IData>(`/coffee/${id}`);
    dispatch({
      type: ActionTypes.FETCH_DATA_ITEM_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_DATA_ERROR,
      payload: "Error, something went wrong...",
    });
  }
};

export const filtersChanged = (filter: string) => ({
  type: ActionTypes.ACTIVE_FILTER_CHANGED,
  payload: filter,
});
export const setTerm = (term: string) => ({
  type: ActionTypes.SET_TERM,
  payload: term,
});
