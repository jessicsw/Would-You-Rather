import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  users: state.users
});

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.props;
    const listUsers = Object.keys(users).map(id => {
      let name = users[id].name;
      let avatar = users[id].avatarURL;
      let askCount = users[id].questions.length;
      let answerCount = Object.keys(users[id].answers).length;

      return (
        <li key={id} className="leaderboard-list-item">
          <div className="leaderboard-user-info">
            <div className="leaderboard-user-avatar" style={{
              width: 30,
              height: 30,
              backgroundSize: 30,
              backgroundImage: `url(${avatar})`,
            }}>
            </div>
            <p>{name}</p>
          </div>
          <p>{`Number of Questions Asked: ${askCount}`}</p>
          <p>{`Number of Questions Answered: ${answerCount}`}</p>
        </li>
      )
    })

    return (
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <ol className="leaderboard-list">
          {listUsers}
        </ol>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  null
)(Leaderboard);