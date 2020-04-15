const path = require('path');
const custom = require('../internals/webpack/webpack.dev.js');

const pathToSvg = path.resolve(__dirname, '../src/assets/svg');

module.exports = {
  stories: ['../src/components/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async config => {
    // Exclude Storybook's default file-loader rule from applying to
    // our SVG files -- needed to make svgr/webpack work
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToSvg;

    // Add our app's existing webpack loaders to Storybook
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  },
};
