var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')


 
module.exports = {
	entry: './js/app.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		//publicPath: '/dist'
	},
	module:{
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			},
			{
		        test: /\.(ttf|eot|woff(2)|woff|woff2|svg)$/i,
		        use: [
		          {
		            loader: 'file-loader',
		          },
		        ],
		    },
		    {
		        test: /\.(png|jpg|pe?g|gif)$/,
		        use: [
		          {
		            loader: 'file-loader',
		            options: {
		            	name: '[name].[ext]',
		            	outputPath:'img/',
		            	publicPath:'img/'
		            }
		          },
		        ],
		    },
		]
	},
	plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery'
		})
     ]
};
