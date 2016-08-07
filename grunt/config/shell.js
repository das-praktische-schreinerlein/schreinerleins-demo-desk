(function () {
    'use strict';
    var path = require('path');

    module.exports = {
        genYMF: {
            command: [
                'git clone https://github.com/das-praktische-schreinerlein/your-markdown-fellow.git',
                'cd your-markdown-fellow',
                'npm install',
                path.join('node_modules', '.bin' , 'grunt') + ' dist',
                'cd ..'
                ].join(' && '),
            options: {
                stderr: true,
                execOptions: {
                    cwd: '<%= srcAppModuleBase %>'
                }
            }
        },
        genYaioExplorer: {
            command: [
                'git clone https://github.com/das-praktische-schreinerlein/yaio-explorerapp.git',
                'cd yaio-explorerapp',
                'npm install',
                path.join('node_modules', '.bin' , 'grunt') + ' dist',
                'cd ..'
            ].join(' && '),
            options: {
                stderr: true,
                execOptions: {
                    cwd: '<%= srcAppModuleBase %>'
                }
            }
        },
        genApp: {
            command: [
                'npm install'
            ].join(' && '),
            options: {
                stderr: true,
                execOptions: {
                    cwd: '<%= destAppBase %>'
                }
            }
        },
        runApp: {
            command: [
                path.join('node_modules', '.bin' , 'electron') + ' <%= destAppBase %>'
            ].join(' && '),
            options: {
                stderr: true
            }
        },
        buildApp: {
            command: [
                path.join('node_modules', '.bin' , 'electron-packager') + ' <%= destAppBase %> <%= app.name %> ' +
                '--all ' +
                '--out <%= destElectronBase %> ' +
                '--overwrite ' +
                '--version-string.CompanyName="<%= app.author %>" ' +
                '--version-string.ProductName="<%= app.productName %>" ' +
                '--version-string.FileDescription="<%= app.description %>" ' +
                '--app-category-type=public.app-category.developer-tools ' +
                '--app-bundle-id=<%= app.build.appId %> ' +
                '--app-version=<%= app.version %> ' +
                '--build-version=<%= app.version %> ' +
                '--app-copyright="Copyright <%= app.author %>" '
            ].join(' && '),
            options: {
                stderr: true
            }
        },
        buildInstaller: {
            command: [
                path.join('node_modules', '.bin' , 'electron-installer-windows') + '  --src <%= destElectronBase %>/<%= app.name %>-win32-x64/ --dest <%= destInstallerBase %> --overwrite'
            ].join(' && '),
            options: {
                stderr: true
            }
        }
    };
})();