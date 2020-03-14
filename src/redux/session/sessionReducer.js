import { combineReducers } from 'redux';
import types from '../types';

const isAuth = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN:
      return true;
    case types.LOGOUT:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isAuth,
});
