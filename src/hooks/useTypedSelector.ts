import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, TypedDispatch } from '../redux/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();