import React from 'react';
import './Icon.scss';

import GitHub from '../../assets/svg/github.svg';
import Pause from '../../assets/svg/pause.svg';
import Start from '../../assets/svg/start.svg';
import Restart from '../../assets/svg/restart.svg';

function getIcon(name) {
  switch(name) {
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

export const Icon = ({ name }) => (
  <span className="icon">
    {getIcon(name)}
  </span>
);

