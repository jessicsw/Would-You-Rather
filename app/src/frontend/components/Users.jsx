import React from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser } from '../actions/user_actions';
import { getAllUsers } from '../reducers/selectors';

const mapStateToProps = state => ({
  // use selector to grab all users 
  users: getAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  handleAdd: user => dispatch(addUser(user)),
  handleDelete: user => dispatch(deleteUser(user))
});

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  render() {
    let { handleAdd, handleDelete, users } = this.props;
    return (
      <ul>
        {users.map(user => <li> {user.id} </li>)}
      </ul>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);



