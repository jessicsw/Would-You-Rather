import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';

const ProtectedRoute = ({ component: Component, path, ...rest }) => (
  <Route path={path} {...rest} render={props => (
    Object.keys(store.getState().authedUser).length === 0
      ? <Redirect to="/login" />
      : <Component {...props} />
  )}
  />
);

export default ProtectedRoute;