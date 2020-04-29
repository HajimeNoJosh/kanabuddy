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

  const colorSelect = {
    amaranth: 'amaranth',
    quartz: 'quartz',
  };
  const color = options('Color', colorSelect, 'amaranth', {
    display: 'select',
  });

  const iconNameSelect = {
    start: 'start',
    pause: 'pause',
    restart: 'restart',
    default: 'default',
  };
  const iconName = options('IconName', iconNameSelect, 'default', {
    display: 'select',
  });

  const iconColorSelect = {
    dusk: 'dusk',
    white: 'white',
  };
  const iconColor = options('IconColor', iconColorSelect, 'white', {
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
      color={color}
      iconColor={iconColor}
      iconName={iconName}
      text={text}
    />
  );
};
