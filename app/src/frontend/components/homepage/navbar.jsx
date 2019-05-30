import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  authedUser: state.authedUser
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});

const Navbar = props => {
  const { authedUser, logOutUser } = props;
  const avatarImg = authedUser.avatarURL ? authedUser.avatarURL : 'N/A';

  return (
    <div className="navbar">
      <span className="navbar-header">
        Would You Rather?
      </span>
      <div className="navbar-links">
        <NavLink className="navbar-link" to="/">Home</NavLink>
        <NavLink className="navbar-link" to="/create_question">Ask a Question</NavLink>
        <NavLink className="navbar-link" to="/leaderboard">Leaderboard</NavLink>
        <div className="navbar-user-profile">
          <div className="navbar-user-avatar" style={{
            backgroundImage: `url(${avatarImg})`,
          }}>
          </div>
          <div className="navbar-user-name">
            {authedUser && authedUser.name}
          </div>
        </div>
        <NavLink className="navbar-link" to="/login" onClick={() => logOutUser()}>Logout</NavLink>
      </div>
    </div>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);