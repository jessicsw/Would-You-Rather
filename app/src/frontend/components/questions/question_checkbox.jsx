import React from 'react';
import * as GameAPI from '../../../_DATA.js';
import checkbox_unchecked from '../../../images/checkbox_unchecked.png';
import checkbox_checked from '../../../images/checkbox_checked.png';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = event => {
    event.preventDefault();

    this.setState({ checked: !this.state.checked });

    let saveAnswer = {
      authedUser: this.props.user.id,
      qid: event.target.dataset.id,
      answer: event.target.dataset.name
    };

    GameAPI._saveQuestionAnswer(saveAnswer);
    GameAPI._getUsers()
      .then(users => { this.props.fetchUsers(users) });
    GameAPI._getQuestions()
      .then(questions => { this.props.fetchQuestions(questions) });
    setTimeout(() => this.props.updateAuthedUser(this.props.users[this.props.user.id]), 500);
  }

  render() {
    const { checked } = this.state;
    const { id, name } = this.props;

    return (
      <img
        src={checked ? checkbox_checked : checkbox_unchecked}
        onClick={this.handleOnClick}
        data-id={id}
        data-name={name}
        alt="" />
    )
  }
}

export default Checkbox;