import React from 'react';
import * as GameAPI from '../../../_DATA';

class UnansweredQuestions extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = event => {
    event.preventDefault();

    let saveAnswer = {
      authedUser: this.props.user.id,
      qid: event.target.dataset.id,
      answer: event.target.dataset.value
    };

    GameAPI._saveQuestionAnswer(saveAnswer);
    GameAPI._getUsers()
      .then(users => { this.props.fetchUsers(users) });
    GameAPI._getQuestions()
      .then(questions => { this.props.fetchQuestions(questions) });
    // setTimeout(() => console.log(this.props.users[this.props.user.id]), 1000);
    setTimeout(() => this.props.updateAuthedUser(this.props.users[this.props.user.id]), 1000);
  }

  render() {
    const { user, questions } = this.props;
    const unansweredQuestions = Object.keys(questions)
      .sort((q1, q2) => (q1.timestamp > q2.timestamp) ? 1 : -1)
      .filter(questionID => (
        Object.keys(user.answers).indexOf(questionID) === -1))

    return (
      <ul className="question-list">
        {unansweredQuestions.map(id => {
          const author = questions[id].author;
          const optionOne = questions[id].optionOne;
          const optionTwo = questions[id].optionTwo;

          return (
            <li className="question-item" key={id}>
              <div className="question-author">
                {author}
              </div>
              <div className="question-option button">
                <p
                  data-id={id}
                  data-value="optionOne"
                  onClick={this.handleOnClick}>
                  {optionOne.text}</p>
              </div>
              <div className="question-option onclick button">
                <p
                  data-id={id}
                  data-value="optionTwo"
                  onClick={this.handleOnClick}>
                  {optionTwo.text}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
};

export default UnansweredQuestions;