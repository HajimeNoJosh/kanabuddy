import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import GithubLink from '../GithubLink/GithubLink';
import { Timer } from '../Timer/Timer';

import './Scaffold.scss';

export const Scaffold = ({ children, minutes, seconds, variant }) => (
  <div className="scaffold">
    <header className="scaffold__header">
      <Logo fill="default" size="md"></Logo>
      {variant === 'TestPage' && <Timer minutes={minutes} seconds={seconds} />}
    </header>
    <main className="scaffold__main">{children}</main>
    <footer className="scaffold__footer">
      <GithubLink />
    </footer>
  </div>
);

Scaffold.propTypes = {
  children: PropTypes.node,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  variant: PropTypes.string,
};
