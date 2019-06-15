const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isDev = (process.env.npm_lifecycle_script || '').indexOf('development') !== -1

module.exports = {
    entry: path.join(__dirname, '/js/interop/main.js'),
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'source-map' : 'none',
    output: {
        path: path.join(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
              test: /\.html$/,
              use: {
                  loader: 'html-loader',
                options: {
                    attrs: [],
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
        minify: !isDev,
      })
    ]
        .concat((() => {
            // only copy assets on production builds
            let plugins = []

            if (!isDev) {
              plugins.push(new CopyWebpackPlugin([
                {from: 'audio', to: 'audio'},
                {from: 'css', to: 'css'},
                {from: 'font', to: 'font'},
                {from: 'images', to: 'images'},
                {from: 'js/interop/electron.js', to: 'js/interop/electron.js'},
                {from: 'js/vendor', to: 'js/vendor'},
                {from: 'partials', to: 'partials'},
                {from: 'tooltipster/dist', to: 'tooltipster/dist'},
                {from: 'video', to: 'video'},
                {from: 'settings.json', to: 'settings.json'},
              ]))
            }

            return plugins
        })()),
}
