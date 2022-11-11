const FileManagerPlugin = require('filemanager-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')

const mountConfig = {
  devServer: {
    allowedHosts: [
      '.smhog.co.uk'
    ],
    compress: true,
    contentBase: path.resolve('.', 'cdn', 'public'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 3000,
    publicPath: '//development.smhog.co.uk/asset/',
    writeToDisk: true
  },

  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,

  entry: {
    marketing: path.resolve('.', 'application', 'platform', 'web', 'marketing', 'mount')
  },

  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrcRoots: [
                ".",
                "./service/*"
              ],
              plugins: [
                [ "@babel/plugin-syntax-dynamic-import" ],
                [ "@babel/plugin-proposal-object-rest-spread" ]
              ],
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      browsers: [ "> 1%" ]
                    },
                    useBuiltIns: "entry"
                  }
                ]
              ]
            }
          }
        ]
      },

      {
        exclude: /node_modules/,
        test: /\.(sa|sc|c)ss$/,
        use: [
          (process.env.NODE_ENV === 'development' ? 'vue-style-loader' : MiniCssExtractPlugin.loader),
          'css-loader',
          'sass-loader'
        ]
      },

      {
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        },
        test: /\.vue$/
      }
    ]
  },

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  output: {
    chunkFilename: '[hash].[name].js',
    filename: '[hash].[name].js',
    path: path.resolve('.', 'cdn', 'public', 'asset'),
    publicPath: process.argv[1].indexOf('webpack-dev-server') >= 0 ? '//localhost:3000/asset/' : '/asset/'
  },

  optimization: {
    minimize: false,
    minimizer: [

      new OptimizeCSSAssetsPlugin(),

      new TerserPlugin()

    ],
    namedChunks: process.env.NODE_ENV === 'development' ? true : false,
    namedModules: process.env.NODE_ENV === 'development' ? true : false,
    nodeEnv: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    noEmitOnErrors: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {

        commons: {
          chunks: 'all',
          maxSize: 1500000,
          minSize: 1000000,
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/
        },

        styles: {
          chunks: 'all',
          enforce: true,
          maxSize: 1500000,
          minSize: 1000000,
          name: 'vendors',
          test: /\.css$/
        }

      },
      chunks: 'all',
      maxSize: 300000,
      minSize: 10000
    }
  },

  performance: {
    hints: false
  },

  plugins: [
    ...[

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.GOOGLE_ANALYTICS_TRACKING_ID': JSON.stringify(process.env.GOOGLE_ANALYTICS_TRACKING_ID),
        'process.env.SERVICE_MARKETING_HTTP_PORT': JSON.stringify(process.env.SERVICE_MARKETING_HTTP_PORT),
        'process.env.SERVICE_MARKETING_HTTPS_PORT': JSON.stringify(process.env.SERVICE_MARKETING_HTTPS_PORT)
      }),

      new webpack.HotModuleReplacementPlugin(),

      new webpack.ProvidePlugin({
        Promise: 'bluebird'
      }),

      new FileManagerPlugin({
        onEnd: [
          {
            copy: [
              { source: 'cdn/public/asset/manifest.json', destination: 'service/marketing/' },
              { source: 'application/asset/', destination: 'cdn/public/asset/' }
            ]
          }
        ],
        onStart: [
          {
            delete: [
              'cdn/public/',
            ]
          },
          {
            mkdir: [
              'cdn/public/'
            ]
          }
        ]
      }),

      new VueLoaderPlugin(),

      new VueSSRClientPlugin({
        filename: 'manifest.json'
      })

    ],
    ...(process.env.NODE_ENV === 'development' ? [] : [

      new MiniCssExtractPlugin({
        filename: 'style.[name].[hash].css'
      })

    ])
  ],

  resolve: {
    alias: {
      '@application': path.resolve('.', 'application'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: [
      '.js',
      '.json',
      '.scss',
      '.vue'
    ]
  },

  target: 'web',

  watch: false
}

const bootstrapConfig = {
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,

  entry: {
    marketing: path.resolve('.', 'application', 'platform', 'web', 'marketing', 'bootstrap')
  },

  externals: [
    nodeExternals()
  ],

  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrcRoots: [
                ".",
                "./service/*"
              ],
              plugins: [
                [ "@babel/plugin-syntax-dynamic-import" ],
                [ "@babel/plugin-proposal-object-rest-spread" ]
              ],
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      esmodules: true
                    }
                  }
                ]
              ]
            }
          }
        ]
      },

      {
        exclude: /node_modules/,
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          },
          preserveWhitespace: false
        },
        test: /\.vue$/
      }
    ]
  },

  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve('.', 'service', 'marketing')
  },

  optimization: {
    namedModules: process.env.NODE_ENV === 'development' ? true : false,
    nodeEnv: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    noEmitOnErrors: true
  },

  performance: {
    hints: false
  },

  plugins: [
    ...[

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.GOOGLE_ANALYTICS_TRACKING_ID': JSON.stringify(process.env.GOOGLE_ANALYTICS_TRACKING_ID),
        'process.env.SERVICE_MARKETING_HTTP_PORT': JSON.stringify(process.env.SERVICE_MARKETING_HTTP_PORT),
        'process.env.SERVICE_MARKETING_HTTPS_PORT': JSON.stringify(process.env.SERVICE_MARKETING_HTTPS_PORT)
      }),

      new webpack.ProvidePlugin({
        Promise: 'bluebird'
      }),

      new FileManagerPlugin({
        onStart: [
          {
            delete: [
              'service/bundle.json'
            ]
          }
        ]
      }),

      new VueLoaderPlugin(),

      new VueSSRServerPlugin({
        filename: 'bundle.json'
      })

    ]
  ],

  resolve: {
    alias: {
      '@application': path.resolve('.', 'application')
    },
    extensions: [
      '.js',
      '.json',
      '.scss',
      '.vue'
    ]
  },

  target: 'node',

  watch: false
}

module.exports = [
  bootstrapConfig,
  mountConfig
]
module.exports.bootstrapConfig = bootstrapConfig
module.exports.mountConfig = mountConfig
