/**
 * Created by rodenis on 10.02.16.
 */
import test from 'tape';
import index from '../src/index';
import { version } from '../package.json';

test('async index test', t => {
    t.plan(1);
    const message = `current version is ${version}`;

    setTimeout(() => t.equal(index(), message), 500);
});