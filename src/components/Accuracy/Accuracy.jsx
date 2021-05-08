import React from 'react';
import PropTypes from 'prop-types';

import { Meter } from './Meter';

import './Accuracy.scss';

export const Accuracy = ({ accuracy }) => {
  const dashOffset = 142 - (accuracy * 142) / 100;
  return (
    <div className="accuracy">
      <span className="accuracy__title">Your Score is</span>
      <span className="accuracy__circle">
        <Meter dashOffset={dashOffset} />
      </span>
      <div className="accuracy__inside">
        <span className="accuracy__score">{accuracy}</span>
        <span className="accuracy__inside__subtitle">Out of 100</span>
      </div>
    </div>
  );
};

Accuracy.propTypes = {
  accuracy: PropTypes.number,
};
