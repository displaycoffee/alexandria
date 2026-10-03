/* Packages */
import type { NextConfig } from 'next';
import path from 'path';

/* Shared workspace folder (C:\Users\adria\projects) that holds node_modules and package-lock.json */
const workspaceRoot = path.join(__dirname, '..');

const nextConfig: NextConfig = {
	reactCompiler: true,
	/* @displaycoffee/scripts ships TypeScript source. Workspace packages are compiled automatically locally, but on Vercel it's installed from npm into node_modules, which Next.js doesn't compile unless listed here */
	transpilePackages: ['@displaycoffee/scripts'],
	outputFileTracingRoot: workspaceRoot,
	turbopack: {
		root: workspaceRoot,
	},
};

export default nextConfig;
