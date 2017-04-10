var download = require('download-git-repo');
var ora = require('ora');
var spinner = ora('downloading template');

var TEMPLATE_NAME = 'qh08/hendo';

function install(location,sign){
    spinner.start();
    download(TEMPLATE_NAME, location, function(err) {
        spinner.stop();
        if (err) {
            console.error(error('An error found when initailizing app:'+err));
        }
        console.log(sign);
    });
}


module.exports = exports = {
    install:install,
}