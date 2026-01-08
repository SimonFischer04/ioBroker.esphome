// ioBroker eslint template configuration file for js and ts files
// Please note that esm or react based modules need additional modules loaded.
import config from '@iobroker/eslint-config';

export default [
	...config,
	{
		// specify files to exclude from linting here
		ignores: [
			'.dev-server/',
			'.vscode/',
			'*.test.js',
			'test/**/*.js',
			'*.config.mjs',
			'build',
			'dist',
			'admin/build',
			'admin/words.js',
			'admin/admin.d.ts',
			'**/adapter-config.d.ts',
			'gulpfile.js',
		],
	},
	{
		// you may disable some 'jsdoc' warnings - but using jsdoc is highly recommended
		// as this improves maintainability. jsdoc warnings will not block build process.
		rules: {
			// Disable prettier and style-only rules to preserve existing code formatting
			'prettier/prettier': 'off',
			'prefer-template': 'off',
			'quote-props': 'off',
			'curly': 'off',
			'jsdoc/tag-lines': 'off',
			'no-else-return': 'off',
			// 'jsdoc/require-jsdoc': 'off',
			// 'jsdoc/require-param': 'off',
			// 'jsdoc/require-param-description': 'off',
			// 'jsdoc/require-returns-description': 'off',
			// 'jsdoc/require-returns-check': 'off',
		},
	},
];
