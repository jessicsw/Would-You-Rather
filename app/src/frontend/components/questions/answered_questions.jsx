import React from 'react';

const AnsweredQuestions = props => {
  const { user, users, questions } = props;
  const answeredQuestions = Object.keys(questions)
    .sort((q1, q2) => (q1.timestamp > q2.timestamp) ? 1 : -1)
    .filter(questionID => (
      Object.keys(user.answers).includes(questionID)
    ));

  const usersCount = Object.keys(users).length;

  return (
    <ul className="question-list">
      {answeredQuestions.map(id => {
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
            <div className="answered-question-options">
              <div className="question-option">
                <p>{optionOne.text}</p>
                <div className="question-votes-number">
                  <strong>Number of Votes: </strong>{optionOne.votes.length}
                </div>
                <div className="question-votes-percent">
                  <strong>Percent: </strong>{`${((optionOne.votes.length / usersCount) * 100).toFixed(0)}%`}
                </div>
              </div>
              <div className="question-option">
                <p>{optionTwo.text}</p>
                <div className="question-votes-number">
                  <strong>Number of Votes: </strong>{optionTwo.votes.length}
                </div>
                <div className="question-votes-percent">
                  <strong>Percent: </strong>{`${((optionTwo.votes.length / usersCount) * 100).toFixed(0)}%`}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
};

export default AnsweredQuestions;