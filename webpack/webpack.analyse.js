const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseConf = require('./webpack.base');

module.exports = env => {
  return merge(baseConf(env), {
    stats: 'minimal',
    plugins: [new BundleAnalyzerPlugin()],
  });
};
