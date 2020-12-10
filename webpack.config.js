const path = require('path');

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: './images/[name].[ext]'
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: outputPath
  }
}
