import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input';
import { Kana } from '../Kana/Kana';

import './InputBlock.scss';

export const InputBlock = ({
  onKeyUp,
  wordsToDo,
  wordsComplete,
  onSubmit,
  inputDisabled,
  inputRef,
  isPaused,
}) => {
  let todoJsx;
  let completeJsx;
  let currentWord;

  if (wordsToDo) {
    const newWordsToDo = wordsToDo[0];
    currentWord = newWordsToDo;
  } else {
    currentWord = '';
  }

  if (wordsToDo) {
    todoJsx = wordsToDo
      .slice(1)
      .map((entry) => (
        <Kana
          key={entry.id}
          color="quartz"
          kana={entry.hiragana}
          margin="sm-margin"
        />
      ));
  }

  if (wordsComplete) {
    completeJsx = wordsComplete.map((entry) =>
      entry.isCorrect ? (
        <Kana
          key={entry.id}
          color="logan"
          kana={entry.hiragana}
          margin="sm-margin"
        />
      ) : (
        <Kana
          key={entry.id}
          color="logan"
          isStrikethrough
          kana={entry.hiragana}
          isTransparent
          margin="sm-margin"
        />
      ),
    );
  }
  return (
    <>
      {isPaused ? (
        <div className="block">
          <div className="block__paused"> Test Paused </div>
        </div>
      ) : (
        <div className="block">
          <div className="block__column block--completed">
            <div className="block__textBox">{completeJsx}</div>
          </div>
          <div className="block__input">
            <form onSubmit={onSubmit}>
              <Input
                ariaLabel="input"
                onKeyUp={onKeyUp}
                inputRef={inputRef}
                disabled={inputDisabled}
                maxLength={4}
                currentWord={currentWord.hiragana}
              ></Input>
            </form>
          </div>
          <div className="block__column block--todo">
            <div className="block__textBox">{todoJsx}</div>
          </div>
        </div>
      )}
    </>
  );
};

InputBlock.propTypes = {
  onKeyUp: PropTypes.func,
  wordsToDo: PropTypes.array,
  wordsComplete: PropTypes.array,
  onSubmit: PropTypes.func,
  inputDisabled: PropTypes.bool,
  inputRef: PropTypes.object,
  isPaused: PropTypes.bool,
};
