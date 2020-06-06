const merge = require('webpack-merge');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConf = require('./webpack.base');

module.exports = env => {
  return merge(baseConf(env), {
    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin({
          test: /\.(js|jsx|vue)$/,
          extractComments: false,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
  });
};