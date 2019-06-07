import React from 'react';
import 'normalize.css';
import '../../App.css';
import Login from './login/login';
import Home from './homepage/home';
import { Route, Switch, Redirect } from 'react-router-dom';
import QuestionForm from './questions/question_form';
import ProtectedRoute from './protected_route';
import Leaderboard from './leaderboard/leaderboard';
import Navbar from './homepage/navbar';
import NoMatch from './no_match_route';

const App = () => {

  const LoginContainer = () => (
    <div className="login-container">
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
    </div>
  );

  const DefaultContainer = () => (
    <div className="default-container">
      <ProtectedRoute component={Navbar} />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute path="/create_question" component={QuestionForm} />
        <ProtectedRoute path="/leaderboard" component={Leaderboard} />
        <ProtectedRoute component={NoMatch} />
      </Switch>
    </div>
  );

  return (
    <div className="App" >
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </div >
  );
}

export default App;
