import React from 'react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { CardBackground } from './CardBackground';

export default {
  title: 'CardBackground',
  component: CardBackground,
  decorators: [withKnobs],
};

export const Default = () => {
  const colorSelect = {
    red: 'red',
    blue: 'blue',
  };
  const color = options('Color', colorSelect, 'red', { display: 'select' });

  return <CardBackground color={color} />;
};
