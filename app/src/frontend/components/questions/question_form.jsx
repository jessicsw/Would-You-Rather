import React from 'react';
import * as GameAPI from '../../../_DATA';
import { connect } from 'react-redux';
import { fetchUsers, authedUser } from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  users: state.users,
  authedUser: state.authedUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users)),
  fetchQuestions: questions => dispatch(fetchQuestions(questions)),
  updateAuthedUser: user => dispatch(authedUser(user))
});

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    let newQuestion = {
      author: this.props.authedUser.id,
      optionOneText: event.target.optionone.value,
      optionTwoText: event.target.optiontwo.value
    }

    GameAPI._saveQuestion(newQuestion); //returns new question, do anything?
    GameAPI._getUsers()
      .then(users => this.props.fetchUsers(users));
    GameAPI._getQuestions()
      .then(questions => this.props.fetchQuestions(questions));
    setTimeout(() =>
      this.props.updateAuthedUser(this.props.users[this.props.authedUser.id]), 1000);
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div>
        <h2>WOULD YOU RATHER?</h2>
        <form className="question-form" onSubmit={this.handleSubmit}>
          <div className="question-input">
            <label htmlFor="optionone">First Option: </label>
            <input type="text" name="optionone" required />
          </div>
          <div className="question-input">
            <label htmlFor="optiontwo">Second Option: </label>
            <input type="text" name="optiontwo" required />
          </div>
          <div className="question-form-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);