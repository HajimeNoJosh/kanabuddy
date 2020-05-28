import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const Input = ({
  ariaLabel,
  maxLength,
  disabled,
  onKeyUp,
  inputRef,
  currentWord,
}) => (
  <div className="inputblock">
    <input
      type="text"
      aria-label={ariaLabel}
      className="inputblock__input"
      maxLength={maxLength}
      disabled={disabled}
      onKeyUp={onKeyUp}
      onClick={() => inputRef.current.focus()}
      ref={inputRef}
    />
    <span className="inputblock__current">{currentWord}</span>
  </div>
);

Input.propTypes = {
  onKeyUp: PropTypes.func,
  ariaLabel: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  currentWord: PropTypes.string,
};
