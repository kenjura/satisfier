const path = require('path');
const reactMinServer = require('react-min');

const clientRoot = path.resolve('./src');

const server = reactMinServer({ clientRoot });