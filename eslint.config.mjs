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
]);

export default eslintConfig;
