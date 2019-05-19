import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './frontend/store';
import App from './frontend/components/App';


import { addUser, deleteUser } from './frontend/actions/user_actions';
import { addQuestion, deleteQuestion } from './frontend/actions/question_actions';

window.store = store;
window.addUser = addUser;
window.deleteUser = deleteUser;
window.addQuestion = addQuestion;
window.deleteQuestion = deleteQuestion;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
