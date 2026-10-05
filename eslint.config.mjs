/* Packages */
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			// Next's preset loads the jsx-a11y plugin but only a few of its rules, so add the full recommended set (matches the Vite projects)
			// Note: only the rules are spread, since registering the plugin a second time is an error
			...jsxA11y.flatConfigs.recommended.rules,
			'prefer-const': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'react/no-unescaped-entities': 'off',
			'react-hooks/exhaustive-deps': 'error',
		},
	},
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
