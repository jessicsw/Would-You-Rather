import {
  ADD_USER,
  DELETE_USER
} from '../actions/user_actions';
import merge from 'lodash/merge';

const users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: [/*user*/],
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: [/*user*/],
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  }
};

const usersReducer = (oldState = users, action) => {
  Object.freeze(oldState);
  let nextState;

  switch (action.type) {
    case ADD_USER:
      let newUser = { [action.user.id]: action.user }
      return merge({}, oldState, newUser); //username must be key
    case DELETE_USER:
      nextState = merge({}, oldState);
      delete nextState[action.user.id];

      return nextState;
    default:
      return oldState;
  }
};

export default usersReducer;