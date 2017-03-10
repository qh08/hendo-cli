var _path = require('path');
var _utils = require('./utils');
var _assert = require('assert');
var _fs = require('fs');

function generate(program, _ref) {
    var cwd = _ref.cwd;
    var defaultBase = 'src';
    var base = defaultBase;
    var defaultComponent = _path.join(base, 'components');
    var defaultRouter = _path.join(base, 'routes');
    var defaultModel = _path.join(base, 'models');
    var defaultMock = _path.join(base, 'mocks');

    argsArray = program.args.split(' ');
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

function generateCom(program, cwd, folder, fileName) {
    var vue = program.vue;
    var css = program.css;
    var less = program.less;
    if (!(vue || css || less)) {
        vue = true;
    }
    var folderName = fileName;
    var folderPath = _path.join(cwd, folder, folderName);
    assert(!_fs.eexistsSync(folderPath), 'warning: folder exists');
    var files = [];
    if (vue) {
        files.push({
            fileName = fileName,
            format: 'vue',
            handlebars: 'com.create.vue.full'
        });
    } else if (css || less) {
        files.push({
            fileName: fileName,
            format: 'js',
            handlebars: 'com.create.js'
        }, {
            fileName: fileName,
            format: 'vue',
            handlebars: 'com.create.vue'
        }, {
            fileName: fileName,
            format: css ? 'css' : 'less',
            handlebars: 'com.create.' + cssType + ''
        });
    }
    createFile(folderPath, files);
    // info('create', 'component ' + filePath + withCSS);
}

function generateModel(program, cwd, folder, fileName) {
    var folderName = fileName;
    var folderPath = _path.join(cwd, folder);
    var files = [{
        fileName = fileName,
        format: 'js',
        handlebars: 'model.create'
    }];
    createFile(folderPath, files);
}

function generateMock(program, cwd, folder, fileName) {
    var folderName = fileName;
    var folderPath = _path.join(cwd, folder);
    var files = [{
        fileName = fileName,
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
        var filePath = _path.join(folderPath, file.fileName, file.format);
        _assert(!_fs.eexistsSync(filePath), 'api/models/create: file exists');
        _utils.writeFile(filePath, source);
    }
}