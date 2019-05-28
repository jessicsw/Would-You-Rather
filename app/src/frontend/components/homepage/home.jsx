import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, authedUser } from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';
import QuestionNav from '../questions/question_nav';
//navlink as .active class

const mapStateToProps = state => ({
  users: state.users,
  questions: state.questions,
  authedUser: state.authedUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users)),
  fetchQuestions: questions => dispatch(fetchQuestions(questions)),
  updateAuthedUser: user => dispatch(authedUser(user)),
});

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let { users, questions, authedUser, fetchUsers, fetchQuestions, updateAuthedUser } = this.props;

    return (
      <div>
        <h2>WOULD YOU RATHER?</h2>
        <QuestionNav
          user={authedUser}
          questions={questions}
          users={users}
          fetchUsers={users => fetchUsers(users)}
          fetchQuestions={questions => fetchQuestions(questions)}
          updateAuthedUser={user => updateAuthedUser(user)} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);



