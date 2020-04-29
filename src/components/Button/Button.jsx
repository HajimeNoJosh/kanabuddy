import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Icon } from '../Icon/Icon';

import './Button.scss';

export const Button = ({
  toggle,
  isActive,
  color,
  iconName,
  iconColor,
  text,
}) => {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  useEffect(() => {
    if (text === 'Pause' && isActive === false) {
      setIsDisabledBtn(true);
    } else {
      setIsDisabledBtn(false);
    }
    return () => setIsDisabledBtn(false);
  }, [isDisabledBtn, isActive, text]);

  return (
    <button
      aria-label="play-button"
      onClick={toggle}
      disabled={isDisabledBtn}
      type="button"
      className={classnames('button', `button--${color}`)}
    >
      <div className="button__text">
        {iconName !== 'default' && (
          <span className="button__text--margin">
            <Icon name={iconName} color={iconColor} size="xs" />
          </span>
        )}
        {text}
      </div>
    </button>
  );
};

Button.propTypes = {
  toggle: PropTypes.func,
  isActive: PropTypes.bool,
  color: PropTypes.oneOf(['amaranth', 'quartz']),
  iconName: PropTypes.oneOf(['start', 'pause', 'restart', 'default']),
  iconColor: PropTypes.oneOf(['dusk', 'white']),
  text: PropTypes.oneOf([
    'Start Test',
    'Pause',
    'Start',
    'Restart',
    'Play Again',
  ]),
};

Button.defaultProps = {
  color: 'amaranth',
  text: 'Start Test',
};
