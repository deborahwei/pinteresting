import { combineReducers } from 'redux';

import users from './users_reducer';
import boards from './boards_reducer'
import pins from './pins_reducer';

const entitiesReducer = combineReducers({
  users, 
  boards, 
  pins
});

export default entitiesReducer
