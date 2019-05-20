import React from 'react';
import '../../App.css';
import Login from './login';
import Home from './home';
import { Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
