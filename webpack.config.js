const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const common = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@material-ui/core': '@material-ui/core/es',
    },
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
};

module.exports = [
  // client
  {
    ...common,
    target: 'web',
    mode: 'production',
    entry: './src/client',
    output: {
      path: `${__dirname}/public`,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 1000,
      }),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //     minSize: 1,
    //     maxSize: 1000,
    //     minChunks: 10,
    //     automaticNameDelimiter: '~',
    //     name: true,
    //     cacheGroups: {
    //       vendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //       },
    //       default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true,
    //       },
    //     },
    //   },
    // },
  },
  // server
  {
    ...common,
    target: 'node',
    entry: './src/server',
    externals: [nodeExternals({
      whitelist: [
        /@material-ui\/core\/*./,
      ],
    })],
  },
];
