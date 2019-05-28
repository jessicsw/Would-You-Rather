import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/user_actions';
import { Redirect } from 'react-router-dom';

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
      <NavLink className="navbar-links" to="/">Home</NavLink>
      <NavLink className="navbar-links" to="/create_question">Ask a Question</NavLink>
      <NavLink className="navbar-links" to="/leaderboard">Leaderboard</NavLink>
      <div className="user-profile">
        <div className="user-avatar" style={{
          width: 30,
          height: 30,
          backgroundSize: 30,
          backgroundImage: `url(${avatarImg})`,
        }}>
        </div>
        <div className="user-name">
          {authedUser && authedUser.name}
        </div>
      </div>
      <NavLink className="navbar-links last" to="/login" onClick={() => logOutUser()}>Logout</NavLink>
    </div>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);