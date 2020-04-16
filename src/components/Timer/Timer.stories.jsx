import React from 'react';
import { number } from '@storybook/addon-knobs';
import Timer from './Timer.jsx';

export default {
  title: 'Timer',
  component: Timer,
};

export const Default = () => {
  const labelMinute = 'Minutes';
  const defaultMinute = 0;

  const minute = number(labelMinute, defaultMinute);

  const labelSecond = 'Seconds';
  const defaultSecond = 0;

  const second = number(labelSecond, defaultSecond);

  return <Timer minutes={minute} seconds={second} />;
};
