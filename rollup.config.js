/**
 * Created by rodenis on 11.02.16.
 */
import babel from 'rollup-plugin-babel';

const babelOptions = {
    presets: [ 'es2015-rollup' ],
    babelrc: false
};

export default {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [ babel(babelOptions) ],
    dest: 'build/bundle.js'
};