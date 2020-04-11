import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Tooltip from './Tooltip.jsx';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [withKnobs],
};

export const WithText = () => {
  const tooltipText = text('Text', 'ha');

  return (
    <Tooltip>
      <span style={{ 
        color: '#df677b', 
        fontSize: '2rem',
        fontWeight: '700'
      }}>{tooltipText}</span>
    </Tooltip>
  );
};
