'use strict'

const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const minimizeTrait = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
}

const learningTracks = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      path: path.resolve('./dist'),
      filename: 'centripetal-toolkit.web.min.js',
      libraryTarget: 'umd',
      library: 'centripetal-toolkit',
    },
    externals: {
      ramda: 'R',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/u,
          exclude: /node_modules/u,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true,
                },
              ],
            ],
            plugins: [
              [
                '@babel/plugin-transform-modules-commonjs',
                {
                  loose: true,
                },
              ],
            ],
          },
        },
        {
          exclude: /node_modules/u,
          loader: 'eslint-loader',
          options: {},
          test: /\.js$/u
        },
      ],
    },
  },
  minimizeTrait
)

module.exports = [
  learningTracks
]
