import React from 'react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { CardInfo } from './CardInfo';

export default {
  title: 'CardInfo',
  component: CardInfo,
  decorators: [withKnobs],
};

export const Default = () => {
  const colorSelect = {
    blue: 'blue',
    white: 'white',
  };
  const color = options('Color', colorSelect, 'white', { display: 'select' });

  const romajiSelect = {
    o: 'o',
    i: 'i',
    e: 'e',
    a: 'a',
  };
  const romaji = options('Name', romajiSelect, 'o', { display: 'select' });

  const kanaSelect = {
    sm: 'sm',
    xs: 'xs',
  };
  const kana = options('Size', kanaSelect, 'sm', { display: 'select' });

  return <CardInfo color={color} romaji={romaji} kana={kana} />;
};
