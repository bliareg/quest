var semver = require('semver');
var { engines } = require('./package');
var version = engines.node;

 if (!semver.satisfies(process.version, version)) {
  var error = `The current node version ${process.version} does not satisfy the required version ${version} .`;
  throw new Error(error);
}

