import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const Input = ({
  ariaLabel,
  maxLength,
  disabled,
  onKeyDown,
  inputRef,
}) => (
  <input
    type="text"
    aria-label={ariaLabel}
    className="input"
    maxLength={maxLength}
    disabled={disabled}
    onKeyDown={onKeyDown}
    ref={inputRef}
  />
);

Input.propTypes = {
  onKeyDown: PropTypes.func,
  ariaLabel: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
