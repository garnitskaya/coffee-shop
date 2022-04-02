export interface IData {
    id: number
    name: string
    img: string
    country?: string
    price: string,
    description: string,
    best?: boolean
}

export enum ActionTypes {
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ITEM_SUCCESS = 'FETCH_DATA_ITEM_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
}

interface FetchDataAction {
    type: ActionTypes.FETCH_DATA
}

interface FetchDataSuccessAction {
    type: ActionTypes.FETCH_DATA_SUCCESS
    payload: IData[]
}

interface FetchDataItemSuccessAction {
    type: ActionTypes.FETCH_DATA_ITEM_SUCCESS
    payload: IData
}

interface FetchDataErrorAction {
    type: ActionTypes.FETCH_DATA_ERROR
    payload: string
}

export type Actions =
    FetchDataAction
    | FetchDataSuccessAction
    | FetchDataErrorAction
    | FetchDataItemSuccessAction