import React from 'react';
import * as GameAPI from '../../../_DATA.js';
import login from '../../../images/login.png';
import LoginDropdown from './login_dropdown';
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

    this.state = {
      active: false
    };

    this.handleToggleClass = this.handleToggleClass.bind(this);
  }

  componentDidMount() {
    //Retrieve all users from _DATA.js
    GameAPI._getUsers()
      .then(users => { this.props.fetchUsers(users) });
    GameAPI._getQuestions()
      .then(questions => { this.props.fetchQuestions(questions) });
  }

  handleToggleClass = event => {
    event.preventDefault();

    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }


  render() {
    let { users, updateAuthedUser, history } = this.props;
    let { active } = this.state;

    const listUsers = Object.keys(users).map(id =>
      <LoginDropdown
        key={`login-user-${id}`}
        history={history}
        users={users}
        user={users[id]}
        updateAuthedUser={updateAuthedUser} />
    )

    return (
      <div className="login">
        <img src={login} alt="login" />
        <h4>Please sign in to continue.</h4>
        <div
          className={active ? "login-form active" : "login-form"}
          onClick={this.handleToggleClass}>
          <span>
            Select User
          </span>
          <ul className="login-dropdown">
            {listUsers}
          </ul>
        </div>
      </div >
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);