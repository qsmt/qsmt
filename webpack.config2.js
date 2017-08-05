let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let autoprefixer = require('autoprefixer');

let ENV = process.env.npm_lifecycle_event;
let isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {

	var config = {};

	config.entry = {
		app: './src/js/app.js'
	};

	config.output = {
		path: __dirname + '/dist',
		publicPath: '',
		filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
	};

	if (isProd) {
		config.devtool = 'source-map';
	} else {
		config.devtool = 'eval-source-map';
	}

	config.module = {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
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

	var htmlWebpackPluginConfig = {
		template: './src/index.html',
		inject: 'body'
	};
	if(isProd){
		htmlWebpackPluginConfig = {
			template: './src/index.html',
			inject: 'body',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		};
	}


	config.plugins.push(
		new HtmlWebpackPlugin(htmlWebpackPluginConfig),

		new ExtractTextPlugin({filename: '[name].[hash].css', disable: !isProd})
	);


	if (isProd) {
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			}),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),
			// new webpack.optimize.UglifyJsPlugin(),
			new CopyWebpackPlugin([{
				from: 'src/images',
				to: 'images'
			}]),
		);
	}

	config.devServer = {
		port: 3200,
		contentBase: './src',
		watchContentBase: true,
		historyApiFallback: true,
		open: true,
	};

	return config;
}();
