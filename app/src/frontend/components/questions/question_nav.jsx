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
    let answered = (event.target.dataset.value === 'false')
      ? false
      : true;

    this.setState({ answered });
  }

  render() {
    const {
      user,
      users,
      questions,
      fetchUsers,
      fetchQuestions,
      updateAuthedUser
    } = this.props;
    const { answered } = this.state;

    return (
      <div className="question-nav">
        <div className="question-nav-buttons">
          <div
            className={answered
              ? "question-nav-button"
              : "question-nav-button-selected"}
            data-value="false"
            onClick={this.toggle}>
            Questions to Answer
          </div>
          <div
            className={answered
              ? "question-nav-button-selected"
              : "question-nav-button"}
            data-value="true"
            onClick={this.toggle}>
            Answered Questions
          </div>
        </div>
        <div className="question-list-container">
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
              updateAuthedUser={updateAuthedUser} />
          }
        </div>
      </div >
    )
  }
};

export default QuestionNav;