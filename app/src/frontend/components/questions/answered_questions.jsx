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
        const authorName = users[author].name.split(' ')[0];

        return (
          <li className="question-item" key={id}>
            <div className="question-user small-container">
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

            <div className="answered-question-container">
              <p className="question-author-asks">
                {authorName} asks:
                </p>
              <h3 className="question-header">
                Would you rather...
              </h3>
              <div className="answered-question-options">
                <div className="answered-question-option">
                  <p><strong>{optionOne.text}</strong></p><strong></strong>
                  <div className="question-votes-percent">
                    Percent Vote: {`${((optionOne.votes.length / usersCount) * 100).toFixed(0)}%`}
                  </div>
                  <div className="question-votes-number">
                    Number of Votes: {optionOne.votes.length}
                  </div>
                </div>
                <div className="answered-question-option">
                  <p><strong>{optionTwo.text}</strong></p>
                  <div className="question-votes-percent">
                    Percent: {`${((optionTwo.votes.length / usersCount) * 100).toFixed(0)}%`}
                  </div>
                  <div className="question-votes-number">
                    Number of Votes: {optionTwo.votes.length}
                  </div>
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