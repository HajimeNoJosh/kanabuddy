import React from 'react';
import './Tooltip.scss';
import classnames from 'classnames';

export const Tooltip = ({ className, children }) => (
  <div className={classnames('tooltip', className)}>{children}</div>
);
