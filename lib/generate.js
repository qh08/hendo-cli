var _path = require('path');
var _utils = require('./utils');
var _assert = require('assert');
var _fs = require('fs');
var _chalk = require('chalk');
var success = _chalk.green;

function generate(program, _ref) {
    var cwd = _ref.cwd;
    var defaultBase = 'src';
    var base = defaultBase;
    var defaultComponent = _path.join(base, 'components');
    var defaultRouter = _path.join(base, 'routers');
    var defaultModel = _path.join(base, 'models');
    var defaultMock = _path.join(base, 'mocks');

    _assert(_fs.existsSync(_path.join(cwd,base)), 'there is no folder named src, please check your location of cmd');

    argsArray = program.args;
    var type = argsArray[0];
    var name = argsArray[1];

    if (type == 'component') {
        generateFolder(program, cwd, defaultComponent, name);
    } else if (type == 'router') {
        generateFolder(program, cwd, defaultRouter, name);
    } else if (type == 'model') {
        generateModel(program, cwd, defaultModel, name);
    } else if (type == 'mock') {
        generateMock(program, cwd, defaultMock, name);
    }


}

function generateFolder(program, cwd, folder, fileName) {
    var vue = program.vue;
    var css = program.css;
    var less = program.less;
    if (!(vue || css || less)) {
        vue = true;
    }
    var folderName = fileName;
    var folderPath = _path.join(cwd, folder, folderName);
    _assert(!_fs.existsSync(folderPath), 'warning: folder exists');
    var files = [];
    if (vue) {
        files.push({
            fileName: fileName,
            format: 'vue',
            handlebars: 'com.create.vue.full'
        });
    } else if (css || less) {
        var cssType = css ? 'css' : 'less';
        files.push({
            fileName: fileName,
            format: 'js',
            handlebars: 'com.create.js'
        }, {
            fileName: fileName,
            format: 'vue',
            style: cssType,
            handlebars: 'com.create.vue'
        }, {
            fileName: fileName,
            format: css ? 'css' : 'less',
            handlebars: 'com.create.' + cssType
        });
    }
    createFile(folderPath, files);
    // info('create', 'component ' + filePath + withCSS);
}

function generateModel(program, cwd, folder, fileName) {
    var folderName = fileName;
    var folderPath = _path.join(cwd, folder);
    var files = [{
        fileName: fileName,
        format: 'js',
        handlebars: 'model.create'
    }];
    createFile(folderPath, files);
}

function generateMock(program, cwd, folder, fileName) {
    var folderName = fileName;
    var folderPath = _path.join(cwd, folder);
    var files = [{
        fileName: fileName,
        format: 'js',
        handlebars: 'mock.create'
    }];
    createFile(folderPath, files);
}

function createFile(folderPath, files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var template = _utils.getTemplate(file.handlebars);
        var source = template(file);
        var fileFullName = file.fileName + '.' + file.format;
        var filePath = _path.join(folderPath, fileFullName);
        _assert(!_fs.existsSync(filePath), 'waring: file exists');
        _utils.writeFile(filePath, source);
        console.log(success('\nYou have successfully generated file '+fileFullName+' in\n'+folderPath));
    }
}


module.exports = exports = {
    generate: generate
}