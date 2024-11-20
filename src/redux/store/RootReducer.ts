import {combineReducers} from 'redux';
import appReducer from '../slide/app.slice';
import userReducer from '../slide/user.slice';
const RootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export default RootReducer;

export type RootReducerType = ReturnType<typeof RootReducer>;
export type RootState = RootReducerType;
