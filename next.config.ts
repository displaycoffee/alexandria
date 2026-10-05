/* Packages */
import { createNextConfig } from '@displaycoffee/alexandria/next';

/* Shared Alexandria settings (React Compiler, typed routes, workspace root, transpiled @displaycoffee packages, Sass load path) */
/* Note: add project-specific options as the second argument, e.g. createNextConfig(__dirname, { images: { ... } }) */
const nextConfig = createNextConfig(__dirname);

export default nextConfig;
