import React from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser } from '../actions/user_actions';
import { getAllUsers } from '../reducers/selectors';
import { NavLink } from 'react-router-dom';
//navlink as .active class

const mapStateToProps = state => ({
  //do i need this?
  users: getAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  handleAdd: user => dispatch(addUser(user)), //move to login?
  handleDelete: user => dispatch(deleteUser(user))
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  render() {
    let { handleAdd, handleDelete, users } = this.props;
    return (
      <div>
        <div className="navbar">
          <NavLink className="navbar-links" to="/home">Home</NavLink>
          <NavLink className="navbar-links" to="/newquestion">Ask a Question</NavLink>
          <NavLink className="navbar-links" to="/leaderboard">Leaderboard</NavLink>
          <NavLink className="navbar-links last" to="/">Logout</NavLink>
        </div>
        <h2>WOULD YOU RATHER?</h2>
        <h1>test</h1>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);



