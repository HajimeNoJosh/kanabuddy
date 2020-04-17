import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Icon.scss';

import GitHub from '../../assets/svg/github.svg';
import Pause from '../../assets/svg/pause.svg';
import Start from '../../assets/svg/start.svg';
import Restart from '../../assets/svg/restart.svg';

function getIcon(name) {
  switch (name) {
    case 'github':
      return <GitHub />;
    case 'pause':
      return <Pause />;
    case 'start':
      return <Start />;
    case 'restart':
      return <Restart />;
    default:
      return null;
  }
}

export const Icon = ({ name, color, size }) => (
  <span className={classnames('icon', `icon--${color}`, `icon--${size}`)}>
    {getIcon(name)}
  </span>
);

Icon.propTypes = {
  name: PropTypes.oneOf(['github', 'play', 'pause', 'restart']),
  color: PropTypes.oneOf(['dusk', 'white']),
  size: PropTypes.oneOf('xs', 'sm'),
};

Icon.defaultProps = {
  color: 'dusk',
  size: 'sm',
};
