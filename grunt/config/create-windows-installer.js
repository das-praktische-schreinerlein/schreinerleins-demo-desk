(function () {
    'use strict';

    module.exports = {
        x64: {
            appDirectory: '<%= destElectronBase %>/<%= app.name %>-win32-x64',
            outputDirectory: '<%= destInstallerBase %>/win64',
            authors: '<%= app.author %>',
            exe: '<%= app.name %>' + '.exe'
        },
        ia32: {
            appDirectory: '<%= destElectronBase %>/<%= app.name %>-win32-ia32',
            outputDirectory: '<%= destInstallerBase %>/win32',
            authors: '<%= app.author %>',
            exe: '<%= app.name %>' + '.exe'
        }
    };
})();

