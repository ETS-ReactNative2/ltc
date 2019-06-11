const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.js$/u,
          exclude: /node_modules/u,
          use: [
            {
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
              loader: 'eslint-loader',
            }
          ],
        },
        {
          test: /.css$/u,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /.(jpg|jpeg|png|gif|mp3|svg)$/u,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name]-[hash:8].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ]
  }
}
