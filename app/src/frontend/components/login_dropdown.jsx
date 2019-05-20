import React from 'react';
//add avatar to dropdown

const LoginUser = ({ user }) => (
  <option value={user.id}>
    {user.name}
  </option>
);

export default LoginUser;