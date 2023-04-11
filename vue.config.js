const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			css: { sourceMap: process.env.NODE_ENV !== 'production' },
		},
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
});
