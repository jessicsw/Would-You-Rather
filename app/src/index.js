import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './frontend/store';
import Root from './frontend/components/root';
import { HashRouter } from 'react-router-dom';


// import { addUser, deleteUser } from './frontend/actions/user_actions';
// import { addQuestion, deleteQuestion } from './frontend/actions/question_actions';

window.store = store;
// window.addUser = addUser;
// window.deleteUser = deleteUser;
// window.addQuestion = addQuestion;
// window.deleteQuestion = deleteQuestion;

//entry file
ReactDOM.render(
  <HashRouter>
    <Root store={store} />
  </HashRouter>,
  document.getElementById('root')
);
