import React from 'react';
import * as GameAPI from '../../../_data';
import { connect } from 'react-redux';
import { fetchUsers, authedUser } from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = state => ({
  users: state.users,
  questions: state.questions,
  authedUser: state.authedUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users)),
  fetchQuestions: questions => dispatch(fetchQuestions(questions)),
  updateAuthedUser: user => dispatch(authedUser(user))
});


const QuestionForm = props => {
  const { authedUser, questions, users, fetchUsers, fetchQuestions, updateAuthedUser } = props;

  const handleSubmit = event => {
    event.preventDefault();

    let newQuestion = {
      author: authedUser.id,
      optionOneText: event.target.optionone.value,
      optionTwoText: event.target.optiontwo.value
    };

    GameAPI._saveQuestion(newQuestion); //returns new question, do anything?
    GameAPI._getUsers()
      .then(users => fetchUsers(users));
    GameAPI._getQuestions()
      .then(questions => fetchQuestions(questions));
    setTimeout(() =>
      updateAuthedUser(users[authedUser.id]), 1000);
    console.log(authedUser)
    console.log(users)
    props.history.push(`/`);
  }

  return (
    <div className="question-form-container">
      <header>Create a New Question</header>
      <form className="question-form" onSubmit={handleSubmit}>
        <div className="question-form-input">
          <label htmlFor="optionone">First Option: </label>
          <input type="text" name="optionone" autocomplete="off" required />
        </div>
        <div className="question-form-input">
          <label htmlFor="optiontwo">Second Option: </label>
          <input type="text" name="optiontwo" autocomplete="off" required />
        </div>
        <div className="question-form-button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);