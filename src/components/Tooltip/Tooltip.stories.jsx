import React from 'react';

import Tooltip from './Tooltip.jsx';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const oneLine = () => (
  <Tooltip>
    <span style={{ color: '#df677b' }}>Ha</span>
  </Tooltip>
);

export const twoLine = () => (
  <Tooltip>
    <span style={{ color: '#686868' }}>How do you do?</span>
  </Tooltip>
);
