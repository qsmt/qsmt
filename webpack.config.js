let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let autoprefixer = require('autoprefixer');

let ENV = process.env.npm_lifecycle_event;
let isTest = ENV === 'test' || ENV === 'test-watch';
let isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {

	var config = {};

	config.entry = isTest ? {} : {
			app: './src/js/app.js'
		};

	config.output = isTest ? {} : {
			path: __dirname + '/dist',
			publicPath: '',
			filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
		};

	if (isTest) {
		config.devtool = 'inline-source-map';
	} else if (isProd) {
		config.devtool = 'source-map';
	} else {
		config.devtool = 'eval-source-map';
	}

	config.module = {
		rules: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: ["react"]
			},
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers: ['> 5%']
								})
							]
						}
					},
					'less-loader']
			})
		}, {
			test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
			loader: 'file-loader?name=./assets/[name].[ext]'
		}, {
			test: /\.html$/,
			loader: 'raw-loader'
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}
		]
	};


	config.plugins = [];

	if (!isTest) {
		config.plugins.push(
			new HtmlWebpackPlugin({
				template: './src/index.html',
				inject: 'body'
			}),

			new ExtractTextPlugin({filename: '[name].[hash].css', disable: !isProd})
		);
	}

	if (isProd) {
		config.plugins.push(
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new CopyWebpackPlugin([{
				from: 'src/images',
				to: 'images'
			}])
		);
	}

	config.devServer = {
		port: 3200,
		contentBase: './src',
		watchContentBase: true,
		open: true
	};

	return config;
}();
