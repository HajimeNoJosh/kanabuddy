import React from 'react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { Logo } from './Logo';

export default {
  title: 'Logo',
  component: Logo,
  decorators: [withKnobs],
};

export const Default = () => {
  const fillSelect = {
    default: 'default',
    white: 'white',
  };
  const fill = options('Fill', fillSelect, 'default', { display: 'select' });

  const sizeSelect = {
    md: 'md',
    lg: 'lg',
  };

  const size = options('Size', sizeSelect, 'md', { display: 'select' });

  return (
    <div
      style={fill === fillSelect.white ? { backgroundColor: 'black' } : null}
    >
      <Logo fill={fill} size={size} />
    </div>
  );
};
