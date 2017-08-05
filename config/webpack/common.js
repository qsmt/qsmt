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
			// ** ADDING/UPDATING LOADERS **
			// The "file" loader handles all assets unless explicitly excluded.
			// The `exclude` list *must* be updated with every change to loader extensions.
			// When adding a new loader, you must add its `test`
			// as a new entry in the `exclude` list in the "file" loader.

			// "file" loader makes sure those assets end up in the `build` folder.
			// When you `import` an asset, you get its filename.
			{
				exclude: [
					/\.html$/,
					/\.(js|jsx)$/,
					/\.css$/,
					/\.less$/,
					/\.json$/,
					/\.bmp$/,
					/\.gif$/,
					/\.jpe?g$/,
					/\.png$/,
				],
				loader: require.resolve('file-loader'),
				options: {
					name: 'assets/[name].[hash:8].[ext]',
				},
			},
			// "url" loader works just like "file" loader but it also embeds
			// assets smaller than specified size as data URLs to avoid requests.
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'assets/[name].[hash:8].[ext]',
				},
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
