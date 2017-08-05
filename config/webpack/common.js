const autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		app: './src/js/app.js'
	},

	resolve: {
		extensions: ['.ts', '.js']
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	plugins: []
};
