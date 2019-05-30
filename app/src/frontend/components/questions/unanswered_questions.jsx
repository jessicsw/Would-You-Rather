import React from 'react';
import * as GameAPI from '../../../_DATA';


const UnansweredQuestions = props => {
  const handleOnClick = event => {
    event.preventDefault();

    let saveAnswer = {
      authedUser: props.user.id,
      qid: event.target.dataset.id,
      answer: event.target.dataset.value
    };

    GameAPI._saveQuestionAnswer(saveAnswer);
    GameAPI._getUsers()
      .then(users => { props.fetchUsers(users) });
    GameAPI._getQuestions()
      .then(questions => { props.fetchQuestions(questions) });
    // setTimeout(() => console.log(props.users[props.user.id]), 1000);
    setTimeout(() => props.updateAuthedUser(props.users[props.user.id]), 1000);
  }

  const { user, users, questions } = props;
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

        const avatarImg = users[author].avatarURL;

        return (
          <li className="question-item" key={id}>
            <div className="question-user">
              <div
                className="question-user-avatar"
                style={{
                  backgroundImage: `url(${avatarImg})`,
                }}>
              </div>
              <div className="question-user-author">
                {author}
              </div>
            </div>
            <div className="question-user-divide"></div>
            <div className="unanswered-question-options">
              <div className="question-option-one">
                <p
                  data-id={id}
                  data-value="optionOne"
                  onClick={handleOnClick}>
                  {optionOne.text}</p>
              </div>
              <div className="question-options-or">or</div>
              <div className="question-option-two">
                <p
                  data-id={id}
                  data-value="optionTwo"
                  onClick={handleOnClick}>
                  {optionTwo.text}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
};

export default UnansweredQuestions;