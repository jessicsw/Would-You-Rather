import {
  RECEIVE_AUTHED_USER,
  LOGOUT_USER
} from '../actions/user_actions';
import merge from 'lodash/merge';

let _defaultState = {};

const authedUserReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_AUTHED_USER:
      return merge({}, action.user, { answers: action.user.answers });
    case LOGOUT_USER:
      return _defaultState;
    default:
      return state;
  }
};

export default authedUserReducer;