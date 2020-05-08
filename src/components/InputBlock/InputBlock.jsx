import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input';

import './InputBlock.scss';

const compareTwo = (first, second) =>
  first.toLowerCase() === second.toLowerCase();

export const InputBlock = ({ onKeyDown }) => {
  const [wordsToDo, setWordsToDo] = useState([
    { answer: 'dog', isCorrect: false, id: 1 },
    { answer: 'dog', isCorrect: false, id: 2 },
    { answer: 'dog', isCorrect: false, id: 3 },
    { answer: 'dog', isCorrect: false, id: 4 },
    { answer: 'dog', isCorrect: false, id: 5 },
  ]);

  const inputRef = useRef();

  const [wordsComplete, setWordsComplete] = useState([]);

  const [inputDisabled, setInputDisabled] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setWordsComplete([...wordsComplete, wordsToDo[0]]);

    const tempArray = [...wordsToDo];
    if (compareTwo(tempArray[0].answer, inputRef.current.value)) {
      tempArray[0].isCorrect = true;
    }
    tempArray.splice(0, 1);

    setWordsToDo(tempArray);

    if (tempArray.length === 0) {
      setWordsToDo(null);
      setInputDisabled(true);
    }
    inputRef.current.value = '';
  };

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
          onKeyDown={onKeyDown}
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
  onKeyDown: PropTypes.func,
};
