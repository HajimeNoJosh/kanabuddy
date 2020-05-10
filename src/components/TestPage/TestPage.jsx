import React, { useEffect, useRef, useReducer } from 'react';
import { Scaffold } from '../Scaffold/Scaffold';
import { Button } from '../Button/Button';
import { InputBlock } from '../InputBlock/InputBlock';

import './TestPage.scss';

const compareTwo = (first, second) =>
  first.toLowerCase() === second.toLowerCase();

const initialState = {
  time: { m: 1, s: 0 },
  isActive: false,
  isPauseShowing: true,
  timerId: null,
  wordsToDo: [
    { answer: 'dog', isCorrect: false, id: 1 },
    { answer: 'cat', isCorrect: false, id: 2 },
    { answer: 'lol', isCorrect: false, id: 3 },
    { answer: 'bee', isCorrect: false, id: 4 },
    { answer: 'ape', isCorrect: false, id: 5 },
  ],
  wordsComplete: [],
  inputDisabled: false,
  noTime: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'play':
      return {
        ...state,
        isActive: !state.isActive,
        inputDisabled: !state.inputDisabled,
        isPauseShowing: !state.isActive,
      };
    case 'setTimer':
      return { ...state, timerId: action.id };
    case 'pause':
      return {
        ...state,
        isActive: !state.isActive,
        inputDisabled: !state.inputDisabled,
        isPauseShowing: !state.isActive,
      };
    case 'submitWordsComplete':
      return {
        ...state,
        wordsComplete: [...state.wordsComplete, state.wordsToDo[0]],
        wordsToDo: [...state.wordsToDo.slice(1)],
      };
    case 'submitWordsToDoCorrect':
      return {
        ...state,
        wordsComplete: [
          ...state.wordsComplete,
          { ...state.wordsToDo[0], isCorrect: true },
        ],
        wordsToDo: [...state.wordsToDo.slice(1)],
      };
    case 'noWords':
      return {
        ...state,
        wordsToDo: null,
        noTime: true,
        isActive: !state.isActive,
        inputDisabled: !state.inputDisabled,
        isPauseShowing: !state.isActive,
      };
    case 'firstTick':
      return {
        ...state,
        time: { m: 0, s: 59 },
        isActive: !state.isActive,
        isPauseShowing: !state.isActive,
      };
    case 'ticks':
      return {
        ...state,
        time: { ...state.time, s: action.newSecond },
      };
    case 'finalTick':
      return {
        ...state,
        isActive: false,
        isPauseShowing: false,
        noTime: true,
        inputDisabled: true,
      };
    case 'reset':
      return { ...initialState };
    default:
      throw new Error();
  }
}

export const TestPage = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const inputRef = useRef();

  useEffect(() => {
    if (state.isActive) {
      const id = setInterval(tick, 1000);
      dispatch({ type: 'setTimer', id });
    } else if (!state.isActive && state.time.s !== 0) {
      clearInterval(state.timerId);
    }
    return () => clearInterval(state.timerId);
  }, [state.isActive, state.time]);

  function pause() {
    dispatch({ type: 'pause' });
  }

  function play() {
    dispatch({ type: 'play' });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (compareTwo(state.wordsToDo[0].answer, inputRef.current.value)) {
      dispatch({ type: 'submitWordsToDoCorrect' });
    } else {
      dispatch({ type: 'submitWordsComplete' });
    }

    if (state.wordsToDo.length === 1) {
      dispatch({ type: 'noWords' });
    }
    inputRef.current.value = '';
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
      dispatch({ type: 'submitWordsToDoCorrect' });
      inputRef.current.value = '';
      if (state.wordsToDo.length === 1) {
        dispatch({ type: 'noWords' });
      }
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
            inputDisabled={state.inputDisabled}
            onSubmit={onSubmit}
            inputRef={inputRef}
          />
        </div>
        <div className="test__buttons">
          {state.isPauseShowing ? (
            <Button
              onClick={pause}
              aria-label="pause-button"
              disabled={!state.isActive}
              variant="primary"
              iconName="pause"
              text="Pause"
            />
          ) : (
            <div>
              <Button
                onClick={play}
                aria-label="play-button"
                disabled={(state.isActive, state.noTime)}
                variant="primary"
                iconName="start"
                text="Start"
              />
              <Button
                onClick={restart}
                aria-label="restart-button"
                disabled={state.isActive}
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
