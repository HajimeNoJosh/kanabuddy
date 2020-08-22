import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CardBackground.scss';

export const CardBackground = ({ children, color }) => (
  <div className={classnames('CardBackground', `CardBackground__${color}`)}>
    {children}
  </div>
);

CardBackground.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};
