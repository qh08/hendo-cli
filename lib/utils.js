import Handlebars from 'handlebars';
import assert from 'assert';
import {
  join
} from 'path';
import {
  readFileSync,
  existsSync
} from 'fs';
import {
  outputFileSync,
  removeSync
} from 'fs-extra';

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