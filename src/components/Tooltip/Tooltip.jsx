import React from 'react';
import './Tooltip.scss';
import classnames from 'classnames';

export const Tooltip = (props) => (
  <div className={classnames('tooltip', props.className)}>{props.children}</div>
);
