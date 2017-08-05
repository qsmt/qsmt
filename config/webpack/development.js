console.log('development');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = webpackMerge(commonConfig, {
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	// See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
	devtool: 'cheap-module-source-map',

	output: {
		// build folder
		path: path.resolve(__dirname, '../../dist'),
		// public path from homepage
		publicPath: '',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers: ['> 5%']
								})
							]
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
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
					'less-loader'
				]
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		})
	],

	devServer: {
		port: 3200,
		historyApiFallback: true,
		stats: 'minimal',
		// contentBase: path.resolve(__dirname, '../../src'),
		// open: true
	}
});

