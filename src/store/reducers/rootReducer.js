import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  auth: authReducer
  // More reducers can be added
});

export default rootReducer;
