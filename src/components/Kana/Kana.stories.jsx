import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from '@storybook/addon-knobs';
import { Kana } from './Kana';

export default {
  title: 'Kana',
  component: Kana,
  decorator: [withKnobs],
};

export const Default = () => {
  const kana = text('Kana', 'か');

  const colorSelect = {
    seaFoam: 'seaFoam',
    quartz: 'quartz',
    logan: 'logan',
  };
  const color = options('Color', colorSelect, colorSelect.logan, {
    display: 'select',
  });

  const isStrikethrough = boolean('Strikethrough', false);
  const isTransparent = boolean('Transparent', false);

  return (
    <Kana
      color={color}
      kana={kana}
      isStrikethrough={isStrikethrough}
      isTransparent={isTransparent}
    />
  );
};
