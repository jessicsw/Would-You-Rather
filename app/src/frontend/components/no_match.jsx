import React from 'react';
import store from '../store';
import { Redirect } from 'react-router-dom';

const NoMatch = () => (
  <Redirect to="/" />
)

export default NoMatch;