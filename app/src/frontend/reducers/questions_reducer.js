import {
  ADD_QUESTION,
  DELETE_QUESTION,
  RECEIVE_QUESTIONS
} from '../actions/question_actions';
import merge from 'lodash/merge';

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  }
};

const questionsReducer = (oldState = questions, action) => {
  Object.freeze(oldState);
  let nextState;

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      nextState = merge({}, oldState);
      //will this work for object or array?
      action.questions.forEach(question => nextState[question.id] = question);
      return nextState;
    case ADD_QUESTION:
      let newQuestion = { [action.question.id]: action.question };
      return merge({}, oldState, newQuestion);
    case DELETE_QUESTION:
      nextState = merge({}, oldState);
      delete nextState[action.question.id];

      return nextState;
    default:
      return oldState;
  }
};

export default questionsReducer;