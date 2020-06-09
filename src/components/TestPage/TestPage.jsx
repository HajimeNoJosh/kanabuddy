import React, { useEffect, useRef, useReducer } from 'react';
import { AppStates } from '../../app/states';
import { Scaffold } from '../Scaffold/Scaffold';
import { Button } from '../Button/Button';
import { InputBlock } from '../InputBlock/InputBlock';

import Words from './Words.yaml';

import './TestPage.scss';

const compareTwo = (first, second) =>
  first.toLowerCase() === second.toLowerCase();

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
    case 'setInputFocusFalse':
      return {
        ...state,
        shouldInputFocus: false,
      };
    default:
      throw new Error();
  }
}

export const TestPage = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const inputRef = useRef();

  const firstState = state.appState === AppStates.Initial;
  const playState = state.appState === AppStates.Play;
  const pauseState = state.appState === AppStates.Pause;
  const finishedState = state.appState === AppStates.Finished;

  useEffect(() => {
    if (state.shouldInputFocus) {
      inputRef.current.focus();
    }
    if (playState) {
      const id = setInterval(tick, 1000);
      dispatch({ type: 'setTimer', id });
    } else if (!playState) {
      clearInterval(state.timerId);
    }
    dispatch({ type: 'setInputFocusFalse' });
    return () => clearInterval(state.timerId);
  }, [state.appState, state.time]);

  const restart = () => {
    clearInterval(state.timerId);
    dispatch({ type: 'reset' });
  };

  const tick = () => {
    if (state.time.m === 0 && state.time.s === 0) {
      clearInterval(state.timerId);
      dispatch({ type: 'finalTick' });
    } else {
      const newSecond = state.time.s - 1;

      dispatch({ type: 'ticks', newSecond });
    }
  };

  const onKeyPress = (e) => {
    if (
      (state.time.m === 1 && e.which >= 65 && e.which <= 90) ||
      (e.which === 13 && state.time.m === 1)
    ) {
      dispatch({ type: 'firstTick' });
    }
    submitWords(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitWords();
  };

  const submitWords = (isPartialSubmit = false) => {
    const isAnswerCorrect = compareTwo(
      state.wordsToDo[0].answer,
      inputRef.current.value,
    );
    if (isPartialSubmit && !isAnswerCorrect) {
      return;
    }
    dispatch({ type: 'submitWordsComplete', isCorrect: isAnswerCorrect });

    if (state.wordsToDo.length === 1) {
      dispatch({ type: 'finished' });
    }

    inputRef.current.value = '';
  };

  return (
    <Scaffold minutes={state.time.m} seconds={state.time.s}>
      <div className="instructions">
        Type the kana using Romaji as accurately as you can
      </div>

      <div className="test">
        <div className="test__input">
          <InputBlock
            onKeyUp={onKeyPress}
            wordsToDo={state.wordsToDo}
            wordsComplete={state.wordsComplete}
            inputDisabled={pauseState || finishedState}
            onSubmit={onSubmit}
            isPaused={pauseState}
            inputRef={inputRef}
          />
        </div>
        <div className="test__buttons">
          {firstState || playState ? (
            <span className="test__buttons--pause">
              <Button
                onClick={() => {
                  dispatch({ type: 'pause' });
                }}
                aria-label="pause-button"
                disabled={firstState}
                variant="primary"
                iconName="pause"
                text="Pause"
              />
            </span>
          ) : (
            <div>
              <span className="test__buttons--start">
                <Button
                  onClick={() => {
                    dispatch({ type: 'play' });
                  }}
                  aria-label="play-button"
                  disabled={playState || finishedState}
                  variant="primary"
                  iconName="start"
                  text="Start"
                />
              </span>
              <span className="test__buttons--restart">
                <Button
                  onClick={restart}
                  aria-label="restart-button"
                  disabled={playState}
                  variant="secondary"
                  iconName="restart"
                  text="Restart"
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </Scaffold>
  );
};
