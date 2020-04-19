module.exports = (api) => {
  api.cache.invalidate(() => process.env.NODE_ENV === 'production');
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: '3.6',
          useBuiltIns: 'usage',
        },
      ],
      '@babel/preset-react',
    ],
  };
};
