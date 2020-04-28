import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import GithubLink from '../GithubLink/GithubLink';
import Timer from '../Timer/Timer';

import './Scaffold.scss';

export const Scaffold = ({ children, minutes, seconds }) => (
  <div className="scaffold">
    <header className="scaffold__header">
      <Logo fill="default" size="md"></Logo>
      <Timer minutes={minutes} seconds={seconds}></Timer>
    </header>
    <main className="scaffold__main">{children}</main>
    <footer className="scaffold__footer">
      <GithubLink />
    </footer>
  </div>
);

Scaffold.propTypes = {
  children: PropTypes.element,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};
