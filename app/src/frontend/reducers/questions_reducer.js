import {
  ADD_QUESTION,
  DELETE_QUESTION,
  FETCH_QUESTIONS
} from '../actions/question_actions';
import merge from 'lodash/merge';

let _defaultState = {};

const questionsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let nextState = {};

  switch (action.type) {
    case ADD_QUESTION:
      let newQuestion = { [action.question.id]: action.question };
      return merge({}, oldState, newQuestion);
    case DELETE_QUESTION:
      nextState = merge({}, oldState);
      delete nextState[action.question.id];

      return nextState;
    case FETCH_QUESTIONS:
      Object.keys(action.questions).forEach(id => {
        nextState[id] = action.questions[id]
      });
      return nextState;
    default:
      return oldState;
  }
};

export default questionsReducer;