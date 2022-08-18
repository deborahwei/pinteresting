import { combineReducers } from 'redux';

import users from './users_reducer';
import boards from './boards_reducer'

const entitiesReducer = combineReducers({
  users, 
  boards
});

export default entitiesReducer
