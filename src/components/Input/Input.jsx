import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const Input = ({
  ariaLabel,
  maxLength,
  disabled,
  onKeyUp,
  inputRef,
}) => (
  <input
    type="text"
    aria-label={ariaLabel}
    className="input"
    maxLength={maxLength}
    disabled={disabled}
    onKeyUp={onKeyUp}
    ref={inputRef}
  />
);

Input.propTypes = {
  onKeyUp: PropTypes.func,
  ariaLabel: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
