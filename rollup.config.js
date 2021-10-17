import alias from '@rollup/plugin-alias';
import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const svgr = require('@svgr/rollup').default;
const root = path.resolve(__dirname);

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    commonjs(),
    resolve(),
    svgr(),
    alias({
      resolve: ['*', '.js', '.jsx', '.svg'],
      entries: [
        {
          find: '@',
          replacement: path.resolve(root, './src'),
        },
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
