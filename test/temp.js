// jscs:disable jsDoc

import test from 'tape';
import { version as indexVersion } from '../src/index';
import { version } from '../package.json';

test('version test', t => {
    t.plan(1);

    t.equal(indexVersion, version, 'Must have correct version');
});

// jscs:enable jsDoc