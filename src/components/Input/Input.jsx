import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const Input = ({ onKeyDown }) => (
  <input
    type="text"
    aria-label="Type Kana"
    className="input"
    maxLength="4"
    onKeyDown={onKeyDown}
  />
);

Input.propTypes = {
  onKeyDown: PropTypes.func,
};
