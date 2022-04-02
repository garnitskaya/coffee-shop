import axios from 'axios';
import { Dispatch } from 'react';
import { IData, ActionTypes, Actions } from './../../types/types';

const initialState = {
    coffeeItems: [] as IData[],
    coffeeItem: null as IData | null,
    term: '',
    loading: false,
    error: null as unknown as string,
}

type InitalStateType = typeof initialState;

const reducer = (state = initialState, action: Actions): InitalStateType => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                coffeeItems: action.payload,
                loading: false
            };
        case ActionTypes.FETCH_DATA_ITEM_SUCCESS:
            return {
                ...state,
                coffeeItem: action.payload,
                loading: false
            };
        case ActionTypes.FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;


export const fetchData = () => async (dispatch: Dispatch<Actions>) => {
    try {
        dispatch({ type: ActionTypes.FETCH_DATA });
        const response = await axios.get<IData[]>('http://localhost:3001/coffee')
        setTimeout(() => {
            dispatch({ type: ActionTypes.FETCH_DATA_SUCCESS, payload: response.data })
        }, 1000)
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
        }, 1000)
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_DATA_ERROR, payload: "Error, something went wrong..." })
    }
}