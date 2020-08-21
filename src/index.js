import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TestPage } from './components/TestPage/TestPage';
import { HomePage } from './components/HomePage/HomePage';
import { FinalPage } from './components/FinalPage/FinalPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/final">
        <FinalPage accuracy={92} variant="finalpage" />;
      </Route>
      <Route path="/test">
        <TestPage />;
      </Route>
      <Route exact path="/">
        <HomePage variant="homepage" />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
