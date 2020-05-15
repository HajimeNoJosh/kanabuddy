import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input';

import './InputBlock.scss';

export const InputBlock = ({
  onKeyUp,
  wordsToDo,
  wordsComplete,
  onSubmit,
  inputDisabled,
  inputRef,
}) => {
  let todoJsx;
  let completeJsx;

  if (wordsToDo) {
    todoJsx = wordsToDo.map((entry) => (
      <span key={entry.id} className="block__entry block__todo--entries">
        {entry.answer}
      </span>
    ));
  }
  if (wordsComplete) {
    completeJsx = wordsComplete.map((entry) => (
      <span
        key={entry.id}
        className={`block__entry block__completed--${
          entry.isCorrect ? 'correct' : 'incorrect'
        }`}
      >
        {entry.answer}
      </span>
    ));
  }

  return (
    <div className="block">
      <div className="block__column block--completed">
        <div className="block__textBox">{completeJsx}</div>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          ariaLabel="input"
          onKeyUp={onKeyUp}
          inputRef={inputRef}
          disabled={inputDisabled}
          maxLength={4}
        ></Input>
      </form>

      <div className="block__column block--todo">
        <div className="block__textBox">{todoJsx}</div>
      </div>
    </div>
  );
};

InputBlock.propTypes = {
  onKeyUp: PropTypes.func,
  wordsToDo: PropTypes.array,
  wordsComplete: PropTypes.array,
  onSubmit: PropTypes.func,
  inputDisabled: PropTypes.bool,
  inputRef: PropTypes.object,
};
