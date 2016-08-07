(function () {
    'use strict';

    module.exports = {
        app2dist: {
            files: [
                {
                    expand: true, 
                    cwd: '<%= srcAppBase %>', 
                    src: ['**'], 
                    dest: '<%= destAppBase %>/', 
                    flatten: false
                }
            ]
        },
        moduleYMF2dist: {
            files: [
                {
                    expand: true, 
                    cwd: '<%= srcAppModuleBase %>/your-markdown-fellow/build/', 
                    src: ['**'], 
                    dest: '<%= destAppBase %>/your-markdown-fellow/', 
                    flatten: false
                }
            ]
        },
        moduleYAIO2dist: {
            files: [
                {
                    expand: true, 
                    cwd: '<%= srcAppModuleBase %>/yaio-explorerapp/build/', 
                    src: ['**'], 
                    dest: '<%= destAppBase %>/yaio-explorerapp/', 
                    flatten: false
                }
            ]
        }
    };
})();