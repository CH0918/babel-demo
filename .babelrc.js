module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['chrome '],
        debug: true,
        // useBuiltIns: 'usage',
        // corejs: 3,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    './src/plugin/parameters-insert-plugin.js',
  ],
};
