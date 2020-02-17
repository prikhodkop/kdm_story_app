const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InjectPlugin = require('webpack-inject-plugin').default
const path = require('path')
var webpack = require('webpack');

const DirectoryTreePlugin = require('directory-tree-webpack-plugin')

const isDev = (process.env.npm_lifecycle_script || '').indexOf('development') !== -1

module.exports = {
    entry: path.join(__dirname, '/js/interop/main.js'),
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'source-map' : 'none',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name]' + (!isDev ? '.[chunkhash:7]' : '') + '.js',
        chunkFilename: 'js/[name]' + (!isDev ? '.[chunkhash:7]' : '') + '.js',
    },
    module: {
        rules: [
            {
              test: /\.html$/,
              use: {
                  loader: 'html-loader',
                options: {
                    // attrs: [],
                    attributes: true,
                },
              },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
              test: /\.(srt|htm)$/i,
              use: 'raw-loader',
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
               'file-loader',
              ],
            },
        ],
    },
    devServer: {
        hot: true,
        host: '0.0.0.0',
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.join(__dirname, '/js/shims'),
            path.join(__dirname, '/js'),
            path.join(__dirname, '/node_modules'),
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/index.html'),
        filename: 'index.html',
        minify: (() => {
          return isDev ? false : {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyJS: true,
            removeComments: true,
          }
        })(),
      }),
      new DirectoryTreePlugin({
        dir: './versions/',
        path: './_content.json',
        extensions: /\.(jpg|png|js|srt|mp3|mp4)/
      })
    ]
        .concat((() => {
            // only set cdnHost on production build
            let plugins = []

            if (!isDev) {
              plugins.push(new InjectPlugin(() => {
                return `
                  window.globals.template.cdnHost = 'https://media.githubusercontent.com/media/prikhodkop/kdm_story_app/master'
                `
              }))
            }

            return plugins
          })())
        .concat((() => {
            // only copy assets on production build
            let plugins = []

            if (!isDev) {
              plugins.push(new CopyWebpackPlugin([
                {from: 'css', to: 'css'},
                {from: 'font', to: 'font'},
                {from: 'icon.ico', to: 'icon.ico'},
                {from: 'js/interop/electron.js', to: 'js/interop/electron.js'},
                {from: 'js/vendor', to: 'js/vendor'},
                {from: 'partials', to: 'partials'},
                {from: 'tooltipster/dist', to: 'tooltipster/dist'},
                {from: 'settings.json', to: 'settings.json'},
                {from: 'video/srt', to: 'video/srt'},
              ]))
            }

            return plugins
          })()),
}
