import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  input: 'built-upgrade/upgrade.js',
  output: {file: './dist/upgrade-build.js', format: 'iife'},
  sourceMap: true,
  sourceMapFile: './dist/upgrade-build.js.map',
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      uglify()
  ]
}