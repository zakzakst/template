// eslint-disable no-undef

const TerserPlugin = require('terser-webpack-plugin');
const environment = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    script: './src/js/script.ts',
    // script: './src/js/script.js',
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
    ]
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].js'
  },
  mode: environment, // production development
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          compress: {drop_console: true},
        },
      }),
    ],
  },
};
