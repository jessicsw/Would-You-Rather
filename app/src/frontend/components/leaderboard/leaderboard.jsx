import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  users: state.users
});

const Leaderboard = props => {
  const { users } = props;
  const listUsers = Object.keys(users)
    .sort((u1, u2) => (
      (users[u1].questions.length + Object.keys(users[u1].answers).length)
        > (users[u2].questions.length + Object.keys(users[u2].answers).length)
        ? -1
        : 1
    ))
    .map(id => {
      let name = users[id].name;
      let avatar = users[id].avatarURL;
      let askCount = users[id].questions.length;
      let answerCount = Object.keys(users[id].answers).length;
      let score = askCount + answerCount;

      return (
        <li key={id} className="leaderboard-list-item">
          <div className="leaderboard-score small-container">
            <p>SCORE:</p>
            <strong>{score}</strong>
          </div>
          <div className="leaderboard-user-info large-container">
            <div className="leaderboard-user-avatar" style={{
              backgroundImage: `url(${avatar})`,
            }}>
            </div>
            <p>{name}</p>
            <div className="leaderboard-stats">
              <p>{`Number of Questions Asked: ${askCount}`}</p>
              <p>{`Number of Questions Answered: ${answerCount}`}</p>
            </div>
          </div>
        </li>
      )
    });

  return (
    <div className="leaderboard">
      <header>Leaderboard</header>
      <ul className="leaderboard-list">
        {listUsers}
      </ul>
    </div>
  )
};

export default connect(
  mapStateToProps,
  null
)(Leaderboard);