/* Packages */
import type { NextConfig } from 'next';
import path from 'path';

/* Shared workspace folder (C:\Users\adria\projects) that holds node_modules and package-lock.json */
const workspaceRoot = path.join(__dirname, '..');

const nextConfig: NextConfig = {
	reactCompiler: true,
	outputFileTracingRoot: workspaceRoot,
	turbopack: {
		root: workspaceRoot,
	},
};

export default nextConfig;
