/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConf = require('./webpack.base');

module.exports = env => {
  return merge(baseConf(env), {
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '-',
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 10000,
        cacheGroups: {
          vendor: {
            test: /(node_modules)/,
            name(module) {
              return `${module.context
                .match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                .replace('@', '')}`;
            },
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      minimizer: [
        new MiniCssExtractPlugin({
          filename: env.dev ? 'style.css' : 'style-[contenthash:7].css',
        }),
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
