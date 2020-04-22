import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Logo.scss';

import LogoSvg from '../../assets/svg/logo.svg';

export const Logo = ({ fill, size }) => (
  <span className={classnames('logo', `logo--${fill}`, `logo--${size}`)}>
    <LogoSvg />
  </span>
);

Logo.propTypes = {
  fill: PropTypes.oneOf(['default', 'white']),
  size: PropTypes.oneOf(['md', 'lg']),
};

Logo.defaultProps = {
  fill: 'default',
  size: 'md',
};
