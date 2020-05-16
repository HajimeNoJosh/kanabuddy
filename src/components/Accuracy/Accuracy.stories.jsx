import React from 'react';
import { number } from '@storybook/addon-knobs';
import { Accuracy } from './Accuracy';

export default {
  title: 'Accuracy',
  component: Accuracy,
};

export const Default = () => {
  const accuracy = number('Accuracy', 50);
  return <Accuracy accuracy={accuracy} />;
};
