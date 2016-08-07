(function () {
    'use strict';
    var path = require('path');

    /**
     * baseconfig
     **/
    var srcAppBase = 'src/main/app/';
    var srcAppModuleBase = 'app_modules/';
    var destAppBase = 'app/';
    var destElectronBase = 'out/';
    var destInstallerBase = destElectronBase + 'installer/';

    /**
     * configure tasks
     **/
    module.exports = function(grunt) {
        require('load-grunt-config')(grunt, {
            path: path,
            configPath: path.join(process.cwd(), 'grunt/config'),
            jitGrunt: {
                customTasksDir: 'grunt/tasks'
            },
            data: {
                app: grunt.file.readJSON(path.join(process.cwd(), srcAppBase, '/package.json')),
                pkg: grunt.file.readJSON('package.json'),
                srcAppBase: srcAppBase,
                srcAppModuleBase: srcAppModuleBase,
                destAppBase: destAppBase,
                destElectronBase: destElectronBase,
                destInstallerBase: destInstallerBase
            }
        });

        // register tasks
        grunt.registerTask('default', ['dist']);

        grunt.registerTask('distapp', ['clean:app', 'copy:app2dist', 'copyappmodules', 'replace', 'shell:genApp']);
        grunt.registerTask('distappwithmodules', ['prepareappmodules', 'genappmodules', 'distapp']);
        grunt.registerTask('dist', ['distappwithmodules', 'buildElectronApp', 'create-windows-installer']);
        grunt.registerTask('redist', ['distapp', 'buildElectronApp', 'create-windows-installer']);

        grunt.registerTask('prepareappmodules', ['clean:modules', 'mkdir:modules']);
        grunt.registerTask('genappmodules', ['shell:genYMF', 'shell:genYaioExplorer']);
        grunt.registerTask('copyappmodules', ['copy:moduleYMF2dist', 'copy:moduleYAIO2dist']);

        grunt.registerTask('runElectronApp', ['shell:runApp']);
        grunt.registerTask('buildElectronApp', ['clean:electron', 'shell:buildApp']);
        grunt.registerTask('buildInstaller', ['clean:installer', 'shell:buildInstaller']);


        // load grunt tasks
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-electron-installer');
        grunt.loadNpmTasks('grunt-mkdir');
        grunt.loadNpmTasks('grunt-replace');
        grunt.loadNpmTasks('grunt-shell');

        // on error
        // grunt.option('stack', true);
        // grunt.option('debug', true);
        // grunt.option('verbose', true);
    };

})();
