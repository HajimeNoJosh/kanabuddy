import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import GithubLink from './GithubLink';

export default {
  title: 'GithubLink',
  component: GithubLink,
  decorators: [withKnobs],
};

export const Default = () => {
  const isTooltipShown = boolean('Show Tooltip', false);
  return (
    <div
      style={{
        position: 'relative',
        top: '10rem',
        left: '5rem',
        display: 'inline-block',
      }}
    >
      <GithubLink isTooltipShown={isTooltipShown} />
    </div>
  );
};
