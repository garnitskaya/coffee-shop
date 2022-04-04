import axios from 'axios';
import { Dispatch } from 'react';
import { Actions, ActionTypes, IData } from '../../types/types';

export const fetchData = () => async (dispatch: Dispatch<Actions>) => {
    try {
        dispatch({ type: ActionTypes.FETCH_DATA });
        const response = await axios.get<IData[]>('http://localhost:3001/coffee')
        setTimeout(() => {
            dispatch({ type: ActionTypes.FETCH_DATA_SUCCESS, payload: response.data })
        }, 500)
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_DATA_ERROR, payload: "Error, something went wrong..." });
    }
}

export const fetchDataItem = (id: string | undefined) => async (dispatch: Dispatch<Actions>) => {
    try {
        dispatch({ type: ActionTypes.FETCH_DATA })
        const response = await axios.get<IData>(`http://localhost:3001/coffee/${id}`)
        setTimeout(() => {
            dispatch({ type: ActionTypes.FETCH_DATA_ITEM_SUCCESS, payload: response.data })
        }, 500)
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_DATA_ERROR, payload: "Error, something went wrong..." })
    }
}

export const filtersChanged = (filter: string) => ({ type: ActionTypes.ACTIVE_FILTER_CHANGED, payload: filter });
export const setTerm = (term: string) => ({ type: ActionTypes.SET_TERM, payload: term });