(function () {
    'use strict';

    module.exports = {
        app: ['<%= destAppBase %>'],
        modules: ['<%= srcAppModuleBase %>'],
        electron: ['<%= destElectronBase %>'],
        installer: ['<%= destInstallerBase %>']
    };
})();

