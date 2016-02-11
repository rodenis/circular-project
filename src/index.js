/**
 * Created by rodenis on 10.02.16.
 */
const version = require('../package.json');

const message = `current version is ${version}`;

export default () => message;