import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Icon } from '../Icon/Icon';

import './Button.scss';

export const Button = ({ onClick, isActive, variant, iconName, text }) => (
  <button
    aria-label="play-button"
    onClick={onClick}
    disabled={isActive}
    type="button"
    className={classnames('button', `button--${variant}`)}
  >
    <div className="button__text">
      {iconName && (
        <span className="button__text--margin">
          <Icon
            name={iconName}
            color={variant === 'primary' ? 'white' : 'dusk'}
            size="xs"
          />
        </span>
      )}
      {text}
    </div>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  iconName: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  text: 'Start Test',
};
