import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../Card/Card';

import './Results.scss';

export const Results = ({ wordsComplete }) => {
  const items = [];

  const words = wordsComplete;

  words.forEach((word) => {
    items.push(
      <div className="results__words">
        {!word.isCorrect && (
          <div className="results__answer">{word.answer}</div>
        )}
        <Card
          key={word.id}
          textcolor={word.isCorrect}
          romaji={word.value}
          kana={word.hiragana}
          color={word.isCorrect}
        />
      </div>,
    );
  });

  return (
    <div className="results">
      <div className="results__paragraph">
        These are the answers you provided for each prompt, as well as any
        corrections. Your score is based off the kana you answered during the
        test. Any kana you did not reach does not affect your score. We
        recommend that you study your hiragana charts again and retake the test
      </div>
      <div className="results__items">{items}</div>
    </div>
  );
};
Results.propTypes = {
  wordsComplete: PropTypes.array,
};
