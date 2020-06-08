/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const paths = require('./paths');

module.exports = env => {
  return {
    mode: env.dev ? 'development' : 'production',
    stats: env.dev ? 'minimal' : true,
    entry: [`${paths.src}/index.js`],
    output: {
      path: paths.dist,
      filename: env.dev ? 'js/[name].js' : 'js/[name]-[contenthash].js',
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: env.dev
            ? ['cache-loader', 'babel-loader', 'linaria/loader', 'eslint-loader']
            : ['babel-loader', 'linaria/loader'],
        },
        {
          test: /\.css$/,
          exclude: /(node_modules)/,
          loader: [
            env.dev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.svg$/,
          loader: '@svgr/webpack',
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: !!env.prod }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, `${paths.src}/static`),
            to: paths.dist,
            globOptions: {
              ignore: ['.DS_Store'],
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: `${paths.src}/index.html`,
        filename: `${paths.dist}/index.html`,
        inject: true,
        meta: {
          viewport: 'width=device-width, initial-scale=1',
        },
      }),
      new ProgressBarPlugin({
        complete: chalk.green('■'),
        format: `🤔  Webpack is :msg [:bar] ${chalk.blue.bold(':percent')} ${chalk.yellow(
          '(:elapsed seconds)'
        )}`,
      }),
    ],

    resolve: {
      alias: {
        '@@': paths.root,
        '@': paths.src,
      },
      extensions: ['.js', '.jsx'],
    },
  };
};
