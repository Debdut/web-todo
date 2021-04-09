const path = require('path')

module.exports = [
  {
    mode: 'development',
    entry: './content/index.js',
    output: {
      filename: 'content.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: './dist',
    },
  },
  // {
  //   mode: 'production',
  //   entry: {
  //     popup: './popup/index.jsx',
  //   },
  //   output: {
  //     filename: 'popup.js',
  //     path: __dirname + '/dist'
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.jsx?$/,
  //         exclude: /(node_modules)/,
  //         use: {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: ['@babel/preset-env'],
  //             plugins: [
  //               ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
  //             ]
  //           }
  //         }
  //       },
  //       {
  //         test: /\.scss$/i,
  //         use: [
  //           'style-loader',
  //           'css-loader',
  //           'resolve-url-loader',
  //           'sass-loader',
  //         ],
  //       },
  //     ]
  //   },
  //   resolve: {
  //     extensions: ['.js', '.jsx']
  //   }
  // },
]