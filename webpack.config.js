// const { defineConfig } = require('@vue/cli-service');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: ['./src/main.js'],
		// app: ['./src/polyfills.js', './src/main.js'],
		// app: [__dirname, './src/main.js']
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.html'],
		alias: {
			'@': path.resolve(__dirname, './src/'),
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		historyApiFallback: true,
		open: true,
		hot: true,
		host: '0.0.0.0',
		proxy: {
			'**': {
				target: 'http://localhost:8000',
			},
			// 	// 가상 도메인일 때
			// 	// changeOrigin: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{ test: /\.vue$/, use: 'vue-loader' },
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: 'file-loader',
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg|otf)(\?[a-z0-9=.]+)?$/,
				use: 'url-loader?limit=100000',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
			PUBLIC_URL: 'static',
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser.js',
		}),
	],
};
