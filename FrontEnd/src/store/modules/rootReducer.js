import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import idea from './idea/reducer';

export default combineReducers({
  auth,
  user,
  idea,
});
