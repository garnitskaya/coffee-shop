import { AnyAction, applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import reducer from "./../reducers";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export type RootState = ReturnType<typeof reducer>;

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export default store;
