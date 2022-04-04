import { IData, ActionTypes, Actions } from './../../types/types';

const initialState = {
    coffeeItems: [] as IData[],
    coffeeItem: null as IData | null,
    term: '',
    activeFilter: '',
    filteredItems: [] as IData[],
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
                activeFilter: '',
                filteredItems: action.payload,
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
        case ActionTypes.ACTIVE_FILTER_CHANGED:
            return {
                ...state,
                activeFilter: action.payload,
                filteredItems: action.payload === '' ?
                    state.coffeeItems :
                    state.coffeeItems.filter(item => item.country === action.payload),
            };
        case ActionTypes.SET_TERM:
            return {
                ...state,
                term: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
