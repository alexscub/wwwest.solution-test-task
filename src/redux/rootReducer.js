import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionReducer from './session/sessionReducer';

// config saving auth bool in localStorage
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['isAuth'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
});

export default rootReducer;
