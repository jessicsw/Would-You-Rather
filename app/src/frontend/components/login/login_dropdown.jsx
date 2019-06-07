import React from 'react'

const LoginDropdown = props => {
  const { user, users, updateAuthedUser, history } = props;

  const handleOnClick = event => {
    event.preventDefault();
    let userID = event.target.dataset.id;
    let user = users[userID];
    updateAuthedUser(user);
    setTimeout(() => history.push('/'), 500);
  };

  return (
    <li
      data-id={user.id}
      onClick={handleOnClick}>
      {user.name}
    </li>
  )
}

export default LoginDropdown;