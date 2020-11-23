const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');

const IS_DEV = process.env.NODE_ENV !== 'production';
const srcPath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

const HtmlWebpackPluginDefaultConfig = {
  hash: !IS_DEV,
  minify: {
    collapseWhitespace: true,
    html5: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
    useShortDoctype: true,
    collapseInlineTagWhitespace: true,
  },
};

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    ...HtmlWebpackPluginDefaultConfig,
  }),
  new CopyWebpackPlugin([{ from: 'src/styles/public' }]),
  new webpack.DefinePlugin({
    IS_DEV,
  }),
  new MiniCssExtractPlugin({
    filename: 'index.css',
    // chunkFilename: '[name].css',
  }),
];

const config = {
  mode: IS_DEV ? 'development' : 'production',
  externals: {
    react: 'react',
    reactDom: 'react-dom',
  },
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: outPath,
    // publicPath: '/',
    filename: 'index.js',
    // chunkFilename: 'index.js',
    library: 'index',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    alias: {
      '@src': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // IS_DEV && {
          //   loader: 'babel-loader',
          //   options: { plugins: ['react-hot-loader/babel'] },
          // },
          'ts-loader',
        ].filter(Boolean),
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: IS_DEV
                  ? '[local]__[contenthash:base64:5]'
                  : 'ml--[contenthash:base64:5]',
              },
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer(), mqpacker()],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['src/styles/public/_const.scss'],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins,
  devServer: {
    // host: '192.168.1.113',
    contentBase: outPath,
    stats: 'errors-only',
    port: 9006,
    open: false,
    overlay: true,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    clientLogLevel: 'warning',
  },
  optimization: {
    // splitChunks: {
    //   name: true,
    //   cacheGroups: {
    //     commons: {
    //       chunks: 'initial',
    //       minChunks: 2,
    //     },
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: 'all',
    //       filename: IS_DEV ? 'vendor.[hash].js' : 'vendor.[contenthash].js',
    //       priority: -10,
    //     },
    //     styles: {
    //       name: 'styles',
    //       test: /\.s?css$/,
    //       chunks: 'all',
    //       enforce: true,
    //     },
    //   },
    // },
    // runtimeChunk: true,
  },
};

if (!IS_DEV) {
  // config.optimization.minimizer = [
  //   new TerserPlugin({
  //     cache: true,
  //     parallel: true,
  //     sourceMap: false,
  //     terserOptions: {
  //       // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
  //     },
  //   }),
  //   new OptimizeCSSAssetsPlugin({}),
  // ];
}

module.exports = config;
