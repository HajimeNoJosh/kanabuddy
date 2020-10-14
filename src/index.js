import React from 'react';

import ReactDOM from 'react-dom';
import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppStates } from './app/states';
import { TestPage } from './components/TestPage/TestPage';
import { HomePage } from './components/HomePage/HomePage';
import { FinalPage } from './components/FinalPage/FinalPage';

import Words from './components/TestPage/Words.yaml';

const initialState = {
  time: { m: 1, s: 0 },
  appState: AppStates.Initial,
  timerId: null,
  wordsToDo: Words.wordsToDo,
  wordsComplete: [],
  shouldInputFocus: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'play':
      return {
        ...state,
        appState: AppStates.Play,
        shouldInputFocus: true,
      };
    case 'pause':
      return {
        ...state,
        appState: AppStates.Pause,
        shouldInputFocus: false,
      };
    case 'finished':
      return {
        ...state,
        wordsToDo: null,
        appState: AppStates.Finished,
      };
    case 'submitWordsComplete':
      return {
        ...state,
        wordsComplete: [
          ...state.wordsComplete,
          {
            ...state.wordsToDo[0],
            isCorrect: action.currentWord.isCorrect,
            value: action.currentWord.value,
          },
        ],
        wordsToDo: [...state.wordsToDo.slice(1)],
      };
    case 'setTimer':
      return { ...state, timerId: action.id };
    case 'firstTick':
      return {
        ...state,
        time: { m: 0, s: 59 },
        appState: AppStates.Play,
      };
    case 'ticks':
      return {
        ...state,
        time: { ...state.time, s: action.newSecond },
      };
    case 'finalTick':
      return {
        ...state,
        appState: AppStates.Finished,
      };
    case 'reset':
      return { ...initialState };
    case 'setInputFocusFalse':
      return {
        ...state,
        shouldInputFocus: false,
      };
    default:
      throw new Error();
  }
}

const App = () => (
  <Router>
    <Switch>
      <Route path="/final">
        <FinalPage variant="finalpage" />
      </Route>
      <Route path="/test">
        <TestPage initialState={initialState} reducer={reducer} />
      </Route>
      <Route path="/">
        <HomePage
          aria="start-test-button"
          text="Start Test"
          variant="homepage"
        />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
