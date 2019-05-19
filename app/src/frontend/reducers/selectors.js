// returns the state's users as an array of user info
// i.e. [..., { id: 'jessicawong', avatarURL: }]
export const getAllUsers = ({ users }) => (
  Object.keys(users).map(id => users[id])
);