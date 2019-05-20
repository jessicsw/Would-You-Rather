import { RECEIVE_AUTHED_USER } from '../actions/user_actions';

let _defaultState = {};

const authedUserReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_AUTHED_USER:
      return { ...state, [action.user.id]: action.user }
    default:
      return state;
  }
};

export default authedUserReducer;