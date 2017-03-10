var Handlebars = require('handlebars');
var assert = require('assert');
var join = require('assert').join;
var fs = require('fs');
var fsExtra = require('fs-extra');
var readFileSync = fs.readFileSync;
var existsSync = fs.existsSync;
var outputFileSync = fsExtra.outputFileSync;
var removeSync = fsExtra.removeSync;

function getTemplate(name) {
  const filePath = join(__dirname, `../boilerplates/${name}.handlebars`);
  assert(existsSync(filePath), `getTemplate: file ${name} not fould`);
  const source = readFileSync(filePath, 'utf-8');
  return Handlebars.compile(source);
}

function readFile(filePath) {
  return readFileSync(filePath, 'utf-8');
}

function writeFile(filePath, source) {
  outputFileSync(filePath, source, 'utf-8');
}

function removeFile(filePath) {
  removeSync(filePath);
}

module.exports = exports = {
  getTemplate: getTemplate,
  readFile: readFile,
  writeFile: writeFile,
  removeFile: removeFile
}