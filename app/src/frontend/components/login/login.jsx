import React from 'react';
import * as GameAPI from '../../../_DATA';
import login from '../../../images/login.jpg';
import LoginUser from './login_dropdown';
import { connect } from 'react-redux';
import { authedUser, fetchUsers } from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  updateAuthedUser: user => dispatch(authedUser(user)),
  fetchUsers: users => dispatch(fetchUsers(users)),
  fetchQuestions: questions => dispatch(fetchQuestions(questions))
});

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    //Retrieve all users from _DATA
    GameAPI._getUsers()
      .then(users => { this.props.fetchUsers(users) });
    GameAPI._getQuestions()
      .then(questions => { this.props.fetchQuestions(questions) });
  }

  handleOnChange = event => {
    event.preventDefault();

    let userID = event.target.value;
    let user = this.props.users[userID];
    this.props.updateAuthedUser(user);
  }

  //maybe add spinner until authedUser != empty
  //then can scrap this function
  handleOnClick = event => {
    event.preventDefault();
    this.props.history.push('/');
  }


  render() {
    let { users } = this.props;
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
        <form>
          <select onChange={this.handleOnChange} defaultValue="select user">
            <option value="select user" disabled>Select User</option>
            {listUsers}
          </select>
          <button onClick={this.handleOnClick}>Sign In</button>
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);