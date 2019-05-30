import React from 'react';
import AnsweredQuestions from './answered_questions';
import UnansweredQuestions from './unanswered_questions';

class QuestionNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answered: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = event => {
    event.preventDefault();
    let answered = (event.target.value === 'false')
      ? false
      : true;

    this.setState({ answered });
  }

  render() {
    const { user, users, questions, fetchUsers, fetchQuestions, updateAuthedUser } = this.props;
    const { answered } = this.state;

    return (
      <div className="question-nav">
        <div className="question-nav-buttons">
          <button value="false" onClick={this.toggle}>Questions to Answer</button>
          <button value="true" onClick={this.toggle}>Answered Questions</button>
        </div>
        {answered
          ? <AnsweredQuestions
            user={user}
            users={users}
            questions={questions} />
          : <UnansweredQuestions
            user={user}
            users={users}
            questions={questions}
            fetchUsers={fetchUsers}
            fetchQuestions={fetchQuestions}
            updateAuthedUser={updateAuthedUser} />}

      </div>
    )
  }
};

export default QuestionNav;