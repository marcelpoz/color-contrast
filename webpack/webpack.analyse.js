/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const prodConf = require('./webpack.prod');

module.exports = env => {
  return merge(prodConf(env), {
    plugins: [new BundleAnalyzerPlugin()],
  });
};
