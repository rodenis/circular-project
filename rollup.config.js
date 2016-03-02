/**
 * Created by rodenis on 11.02.16.
 */
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

const babelOptions = {
    presets: [ 'es2015-rollup' ],
    babelrc: false
};

export default {
    entry: 'src/index.js',
    sourceMap: true,
    format: 'cjs',
    plugins: [ json(), babel(babelOptions) ],
    dest: 'build/bundle.js'
};