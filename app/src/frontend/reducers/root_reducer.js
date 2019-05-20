import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import authedUserReducer from './authed_user_reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  authedUser: authedUserReducer
});

export default rootReducer;