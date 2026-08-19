import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
	...nextVitals,
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'playwright-report/**',
		'test-results/**',
		'src/generated/prisma/**',
	]),
	{
		files: ['tests/e2e/**/*.ts'],
		rules: {
			'react-hooks/rules-of-hooks': 'off',
		},
	},
]);

export default eslintConfig;
