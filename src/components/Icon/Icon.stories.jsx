import React from 'react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { Icon } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
  decorators: [withKnobs]
};

export const Default = () => {
  const nameSelect = {
    github: 'github',
    pause: 'pause',
    start: 'start',
    restart: 'restart'
  };
  const name = options('Name', nameSelect, 'github', { display: 'select' });

  const colorSelect = {
    dusk: 'dusk',
    white: 'white'
  };
  const color = options('Color', colorSelect, 'dusk', { display: 'select' });

  const sizeSelect = {
    sm: 'sm',
    xs: 'xs'
  };
  const size = options('Size', sizeSelect, 'sm', { display: 'select' });

  return (
    <Icon name={name} color={color} size={size} />
  );
};
