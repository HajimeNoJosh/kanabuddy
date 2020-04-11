const path = require('path');
const pathToSvg = path.resolve(__dirname, '../src/assets/svg');

module.exports = {
  stories: ['../src/components/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-knobs'
  ],
  webpackFinal: async config => {
    const rules = config.module.rules;

    // Exclude Storybook's default file-loader rule from applying to
    // our SVG files -- needed to make svgr/webpack work
    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToSvg;

    // Transform our SVG files to React Components during build process
    rules.push({
      test: /\.svg$/,
      include: pathToSvg,
      use: [{
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        }
      }]
    });

    // Add Sass support
    rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    return config;
  },
};
