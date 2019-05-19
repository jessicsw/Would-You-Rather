export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const addQuestion = question => ({
  type: ADD_QUESTION,
  question
});

export const deleteQuestion = question => ({
  type: DELETE_QUESTION,
  question
});