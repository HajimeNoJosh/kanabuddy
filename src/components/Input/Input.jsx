import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const Input = ({ ariaLabel, maxLength, disabled, onKeyDown, ref }) => (
  <input
    type="text"
    aria-label={ariaLabel}
    className="input"
    maxLength={maxLength}
    disabled={disabled}
    onKeyDown={onKeyDown}
    ref={ref}
  />
);

Input.propTypes = {
  onKeyDown: PropTypes.func,
  ariaLabel: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  ref: PropTypes.func,
};
