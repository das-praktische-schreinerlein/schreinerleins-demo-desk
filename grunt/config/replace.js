(function () {
    'use strict';

    module.exports = {
        commonJsCompatibility: {
            options: {
                patterns: [
                    {
                        match: /<head>/g,
                        replacement: '<head>\n<script>if (typeof module === \'object\') {window.module = module; module = undefined;}</script>'
                    },
                    {
                        match: /<\/body>/g,
                        replacement: '</body>\n<script>if (window.module) module = window.module;</script>'
                    }
                ]
            },
            files: [
                {expand: true,
                    cwd: '<%= destAppBase %>',
                    src: ['**/*.html'],
                    dest: '<%= destAppBase %>',
                    flatten: false}
            ]
        }
    };
})();