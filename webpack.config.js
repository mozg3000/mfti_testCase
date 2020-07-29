const path = require('path');
export.modules = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src', 'components'),
			pages: path.resolve(__dirname, 'src' , 'pages'),
			reducers: path.resolve(__dirname, 'src', 'reducers'),
			actions: path.resolve(__dirname, 'src', 'actions'),
			containers: path.resolve(__dirname, 'src', 'containers'),
			middlewares: path.resolve(__dirname, 'src', 'middlewares')
		},
	},
	target: "web",
	optimization: {
		// We do not want to minimize our code.
		minimize: false
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	mode: 'development',
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{ 
			  test: /\.jsx?$/, 
			  exclude: /node_modules/, 
			  loader: "babel-loader"
			},
	},
	
}