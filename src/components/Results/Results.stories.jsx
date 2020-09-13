import React from 'react';
import { Results } from './Results';

import Words from '../TestPage/Words.yaml';

export default {
  title: 'Results',
  component: Results,
};

const initialState = {
  time: { m: 1, s: 0 },
  timerId: null,
  wordsToDo: Words.wordsToDo,
  wordsComplete: [],
  shouldInputFocus: true,
};

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error();
  }
}

export const Default = () => (
  <Results initialState={initialState} reducer={reducer} />
);
