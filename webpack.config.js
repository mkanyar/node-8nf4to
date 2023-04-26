const path = require('path');

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: 'production',
  entry: {
    main: './src',
    'a-initial': './src/a',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    // Instruct webpack not to obfuscate the resulting code
    minimize: false,
    splitChunks: {
      minSize: 0,
      /*
      ```
      chunks: 'all',
      minChunks: 4,
      ```
      ---
      ```
      chunks: 'initial',
      minChunks: 1,
      ```
      ---
      ```
      chunks: 'async',
      minChunks: 3,
      ```
      */
      chunks: 'all',
      minChunks: 4,
      cacheGroups: {
        // Disabling this cache group.
        default: false,
      },
    },
  },
  context: __dirname,
};

module.exports = config;
