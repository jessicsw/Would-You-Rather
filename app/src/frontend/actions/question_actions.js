export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";

export const fetchQuestions = questions => ({
  type: FETCH_QUESTIONS,
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