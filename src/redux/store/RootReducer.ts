import {combineReducers} from 'redux';
import appReducer from '../slide/app.slice';

const RootReducer = combineReducers({
  app: appReducer,
});

export default RootReducer;

export type RootReducerType = ReturnType<typeof RootReducer>;
export type RootState = RootReducerType;
