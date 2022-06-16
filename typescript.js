module.exports = {
	globals: {
		React: true,
		JSX: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:prettier/recommended",
		"./.eslintrc.js",
	],
	// then add some extra good stuff for Typescript
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	// Then we add our own custom typescript rules
	rules: {
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: false,
			},
		],
		"@typescript-eslint/no-explicit-any": "off",
		"no-unused-vars": 0,
		"@typescript-eslint/no-unused-vars": [1, { ignoreRestSiblings: true }],
		"no-redeclare": "off",
		"@typescript-eslint/no-redeclare": [
			"warn",
			{
				ignoreDeclarationMerge: true,
			},
		],
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-extra-semi": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-namespace": "off",
		// this is covered by the typescript compiler, so we don't need it
		"no-undef": "off",
		"no-shadow": "off", // TS does it
	},
	parserOptions: {
		project: "./tsconfig.json",
		ecmaVersion: "latest",
		sourceType: "module",
	},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: "./tsconfig.json",
			},
		},
	},
};
