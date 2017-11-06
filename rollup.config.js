import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import browsersync from 'rollup-plugin-browsersync';

const env = process.env.NODE_ENV;

export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        nodeResolve(),
        replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
        env === 'production' && uglify(),
        browsersync({
            server: ['dist', 'src'],
            port: 3000
        })
    ]
};