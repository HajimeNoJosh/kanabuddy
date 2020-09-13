import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CardBackground.scss';

export const CardBackground = ({ children, color }) => {
  const background = color ? 'blue' : 'red';
  return (
    <div
      className={classnames('cardbackground', `cardbackground--${background}`)}
    >
      {children}
    </div>
  );
};

CardBackground.propTypes = {
  children: PropTypes.node,
  color: PropTypes.bool,
};
