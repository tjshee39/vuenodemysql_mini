module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	//   plugins: ["prettier"],
	extends: [
		'airbnb',
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		sourceType: 'module',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		// "prettier/prettier": [
		//   "error",
		//   {
		//     singleQuote: true,
		//     semi: true,
		//     useTabs: true,
		//     tabWidth: 2,
		//     trailingComma: "all",
		//     printWidth: 80,
		//     bracketSpacing: true,
		//     arrowParens: "avoid",
		//     endOfLine: "auto",
		//   },
		// ],
		'no-unused-vars': 1,
		'no-use-before-define': 1,
		'no-redeclare': 1,
	},
};
