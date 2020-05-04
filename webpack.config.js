var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './js/app.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module:{
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			}
		]
	},
	plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
     ]
};
