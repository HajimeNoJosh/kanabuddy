import React from 'react';
import {
  withKnobs,
  optionsKnob as options,
  boolean,
} from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => {
  const label = 'Is the Button active';
  const defaultValue = false;

  const isActive = boolean(label, defaultValue);

  const iconNameSelect = {
    start: 'start',
    pause: 'pause',
    restart: 'restart',
    none: null,
  };
  const iconName = options('IconName', iconNameSelect, null, {
    display: 'select',
  });

  const variantSelect = {
    primary: 'primary',
    secondary: 'secondary',
  };

  const variant = options('Variant', variantSelect, 'primary', {
    display: 'select',
  });

  const textSelect = {
    'Start Test': 'Start Test',
    Pause: 'Pause',
    Start: 'Start',
    Restart: 'Restart',
    'Play Again': 'Play Again',
  };

  const text = options('Text', textSelect, 'Start Test', { display: 'select' });

  return (
    <Button
      isActive={isActive}
      variant={variant}
      iconName={iconName}
      text={text}
    />
  );
};
