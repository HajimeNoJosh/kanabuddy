import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [withKnobs],
};

export const WithText = () => {
  const tooltipText = text('Text', 'Hello');
  const tooltipTextStyles = object('Text Styles', {
    fontWeight: 700,
    color: '#df677b',
  });

  return (
    <Tooltip>
      <span style={tooltipTextStyles}>{tooltipText}</span>
    </Tooltip>
  );
};
