import React from 'react';
import * as GameAPI from '../../_DATA';
import login from '../../images/login.jpg';
import LoginUser from './login_dropdown';
import { connect } from 'react-redux';
import { authedUser } from '../actions/user_actions';

const mapDispatchToProps = dispatch => ({
  updateAuthedUser: user => dispatch(authedUser(user)),
  fetchUsers: users => dispatch()
});

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    //Retrieve all users from _DATA
    GameAPI._getUsers()
      .then(users => this.setState({ users }));
  }

  handleOnChange = event => {
    event.preventDefault();

    let userID = event.target.value;
    let user = this.state.users[userID];
    this.props.updateAuthedUser(user)
      .then(this.props.history.push('/home'));
  }


  render() {
    let { users } = this.state;
    const listUsers = Object.keys(users).map(id =>
      <LoginUser
        key={`login-user-${id}`}
        user={users[id]} />
    );

    return (
      <div className="login">
        <h1>WOULD YOU RATHER?</h1>
        <img src={login} alt="login" />
        <h4>Please sign in to continue.</h4>
        <select onChange={this.handleOnChange} defaultValue="select user">
          <option value="select user" disabled>Select User</option>
          {listUsers}
        </select>
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);