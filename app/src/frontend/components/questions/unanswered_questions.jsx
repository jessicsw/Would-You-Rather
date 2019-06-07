import React from 'react';
import Checkbox from './question_checkbox';


const UnansweredQuestions = props => {
  const {
    user,
    users,
    questions,
    updateAuthedUser,
    fetchUsers,
    fetchQuestions
  } = props;

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
        const authorName = users[author].name.split(' ')[0];

        return (
          <li className="question-item" key={id}>
            <div className="user">
              <div
                className="user-avatar"
                style={{
                  backgroundImage: `url(${avatarImg})`,
                }}>
              </div>
              <div className="user-name">
                {author}
              </div>
            </div>

            <div className="unanswered-question-options">
              <p className="question-author-asks">
                {authorName} asks:
                </p>
              <h3 className="question-header">
                Would you rather...
              </h3>
              <div className="question-option-one">
                <Checkbox
                  id={id}
                  name="optionOne"
                  user={user}
                  users={users}
                  updateAuthedUser={updateAuthedUser}
                  fetchUsers={fetchUsers}
                  fetchQuestions={fetchQuestions} />
                <div className="question-option">{optionOne.text}</div>
              </div>
              <div className="question-option-two">
                <Checkbox
                  id={id}
                  name="optionTwo"
                  user={user}
                  users={users}
                  updateAuthedUser={updateAuthedUser}
                  fetchUsers={fetchUsers}
                  fetchQuestions={fetchQuestions} />
                <div className="question-option">{optionTwo.text}</div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default UnansweredQuestions;