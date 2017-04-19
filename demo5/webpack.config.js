module.exports = {
	
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	
	module: {
		loaders : [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader',
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=2048',
			}
		]
	}
};
