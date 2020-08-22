import React from 'react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card textcolor="white" romaji="o" kana="い" color="blue" />
);
