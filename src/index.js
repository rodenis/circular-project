/**
 * Created by Denis Rodin on 10.02.16.
 */
import { version } from '../package.json';
import { Kefir } from 'kefir';

const message = `current version is ${version}`;

export default () => message;