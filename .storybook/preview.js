import React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/sass/main.scss';

addDecorator(storyFn => (
  <div style={{ padding: '2rem' }}>
    {storyFn()}
  </div>
));

