import React from 'react';
import * as GameAPI from '../../../_DATA';
import { connect } from 'react-redux';
import { fetchUsers, authedUser } from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = state => ({
  users: state.users,
  authedUser: state.authedUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users)),
  fetchQuestions: questions => dispatch(fetchQuestions(questions)),
  updateAuthedUser: user => dispatch(authedUser(user))
});


const QuestionForm = props => {
  const handleSubmit = event => {
    event.preventDefault();

    let newQuestion = {
      author: props.authedUser.id,
      optionOneText: event.target.optionone.value,
      optionTwoText: event.target.optiontwo.value
    }

    GameAPI._saveQuestion(newQuestion); //returns new question, do anything?
    GameAPI._getUsers()
      .then(users => props.fetchUsers(users));
    GameAPI._getQuestions()
      .then(questions => props.fetchQuestions(questions));
    setTimeout(() =>
      props.updateAuthedUser(props.users[props.authedUser.id]), 1000);
    props.history.push(`/`);
  }

  return (
    <div className="question-wrapper">
      <header>Create a New Question</header>
      <form className="question-form" onSubmit={handleSubmit}>
        <div className="question-form-input">
          <label htmlFor="optionone">First Option: </label>
          <input type="text" name="optionone" required />
        </div>
        <div className="question-form-input">
          <label htmlFor="optiontwo">Second Option: </label>
          <input type="text" name="optiontwo" required />
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