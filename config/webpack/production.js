console.log('production');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
	// Don't attempt to continue if there are any errors.
	bail: true,
	// We generate sourcemaps in production. This is slow but gives good results.
	// You can exclude the *.map files from the build during deployment.
	devtool: 'source-map',

	output: {
		// build folder
		path: path.resolve(__dirname, '../../dist'),
		// public path from homepage
		publicPath: '/',
		filename: '[name].[chunkhash:8].js',
		chunkFilename: '[name].[chunkhash:8].chunk.js',
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								minimize: true,
								sourceMap: true,
							},
						},
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
					]
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								minimize: true,
								sourceMap: true,
							},
						},
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
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
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
			}
		}),
		// Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
		new ExtractTextPlugin({filename: '[name].[hash:8].css'})
	],

});

