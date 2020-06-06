const chalk = require('chalk');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const baseConf = require('./webpack.base');
const paths = require('./paths');

module.exports = env => {
  return merge(baseConf(env), {
    devtool: 'inline-source-map',
    devServer: {
      compress: true,
      inline: true,
      port: 3000,
      contentBase: paths.dist,
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        },
      ],
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [
            chalk.blue('🎉   Check out your react app here  👉🏻  http://localhost:3000'),
          ],
        },
      }),
    ],
  });
};
