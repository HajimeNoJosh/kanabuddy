import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import { Tooltip, Icon } from './components';

const App = () => (
  <div>
    <Tooltip>Hello World!!</Tooltip>
    <Icon name="github" />
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
