import React, { useEffect, useRef, useReducer } from 'react';
import { AppStates } from '../../app/states';
import { Scaffold } from '../Scaffold/Scaffold';
import { Button } from '../Button/Button';
import { InputBlock } from '../InputBlock/InputBlock';

import './TestPage.scss';

const compareTwo = (first, second) =>
  first.toLowerCase() === second.toLowerCase();

const initialState = {
  time: { m: 1, s: 0 },
  appState: AppStates.Initial,
  timerId: null,
  wordsToDo: [
    { answer: 'dog', isCorrect: false, id: 1 },
    { answer: 'cat', isCorrect: false, id: 2 },
    { answer: 'lol', isCorrect: false, id: 3 },
    { answer: 'bee', isCorrect: false, id: 4 },
    { answer: 'ape', isCorrect: false, id: 5 },
  ],
  wordsComplete: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'play':
      return {
        ...state,
        appState: AppStates.Play,
      };
    case 'pause':
      return {
        ...state,
        appState: AppStates.Pause,
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
          { ...state.wordsToDo[0], isCorrect: action.isCorrect },
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
    default:
      throw new Error();
  }
}

export const TestPage = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const firstState = state.appState === AppStates.Initial;
  const playState = state.appState === AppStates.Play;
  const pauseState = state.appState === AppStates.Pause;
  const finishedState = state.appState === AppStates.Finished;

  const inputRef = useRef();

  useEffect(() => {
    if (playState) {
      const id = setInterval(tick, 1000);
      dispatch({ type: 'setTimer', id });
    } else if (!playState) {
      clearInterval(state.timerId);
    }
    return () => clearInterval(state.timerId);
  }, [state.appState, state.time]);

  function pause() {
    dispatch({ type: 'pause' });
  }

  function play() {
    dispatch({ type: 'play' });
  }

  const submitWord = () => {
    if (state.wordsToDo.length === 1) {
      dispatch({ type: 'finished' });
    }
    inputRef.current.value = '';
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (compareTwo(state.wordsToDo[0].answer, inputRef.current.value)) {
      dispatch({ type: 'submitWordsComplete', isCorrect: true });
    } else {
      dispatch({ type: 'submitWordsComplete', isCorrect: false });
    }
    submitWord();
  };

  const restart = () => {
    clearInterval(state.timerId);
    dispatch({ type: 'reset' });
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const tick = () => {
    if (state.time.m === 0 && state.time.s === 0) {
      clearInterval(state.timerId);
      dispatch({ type: 'finalTick' });
    }

    const newSecond = state.time.s - 1;

    dispatch({ type: 'ticks', newSecond });
  };

  const startTimer = () => {
    if (state.time.m === 1) {
      dispatch({ type: 'firstTick' });
    }
    if (compareTwo(state.wordsToDo[0].answer, inputRef.current.value)) {
      dispatch({ type: 'submitWordsComplete', isCorrect: true });
      submitWord();
    }
  };

  return (
    <Scaffold minutes={state.time.m} seconds={state.time.s}>
      <div className="test">
        <div className="test__input">
          <InputBlock
            onKeyUp={startTimer}
            wordsToDo={state.wordsToDo}
            wordsComplete={state.wordsComplete}
            inputDisabled={pauseState || finishedState}
            onSubmit={onSubmit}
            inputRef={inputRef}
          />
        </div>
        <div className="test__buttons">
          {firstState || playState ? (
            <Button
              onClick={pause}
              aria-label="pause-button"
              disabled={firstState}
              variant="primary"
              iconName="pause"
              text="Pause"
            />
          ) : (
            <div>
              <Button
                onClick={play}
                aria-label="play-button"
                disabled={playState || finishedState}
                variant="primary"
                iconName="start"
                text="Start"
              />
              <Button
                onClick={restart}
                aria-label="restart-button"
                disabled={playState}
                variant="secondary"
                iconName="restart"
                text="Restart"
              />
            </div>
          )}
        </div>
      </div>
    </Scaffold>
  );
};
