import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import { TestPage } from './components/TestPage/TestPage';

const App = () => <TestPage />;

ReactDOM.render(<App />, document.getElementById('root'));
