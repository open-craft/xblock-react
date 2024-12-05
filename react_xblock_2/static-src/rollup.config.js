import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/react_xblock_2.tsx',
  output: {
    dir: '../public/js',
    format: 'iife',
    name: 'initReactXBlock8StudentView',
  },
  plugins: [
    typescript(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    commonjs(),
    nodeResolve(),
  ]
};
