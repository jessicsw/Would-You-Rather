import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer
});

export default rootReducer;