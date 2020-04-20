import React from 'react';
// import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import GithubLink from './GithubLink';

export default {
  title: 'GithubLink',
  component: GithubLink,
};

export const Default = () => (
  <div
    style={{
      position: 'relative',
      top: '10rem',
      left: '5rem',
      display: 'inline-block',
    }}
  >
    <GithubLink />
  </div>
);
