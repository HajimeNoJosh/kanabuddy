import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Icon } from '../Icon/Icon';

import './Button.scss';

export const Button = ({
  onClick,
  ariaLabel,
  disabled,
  variant,
  iconName,
  text,
}) => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    disabled={disabled}
    type="button"
    className={classnames('button', `button--${variant}`)}
  >
    <span className="button__content">
      {iconName && (
        <span className="button__icon">
          <Icon
            name={iconName}
            color={variant === 'primary' ? 'white' : 'dusk'}
            size="xs"
          />
        </span>
      )}
      {text}
    </span>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  text: 'Start Test',
};
