module.exports = function(grunt){
    var options = {
        src: 'app',
        dist: 'dist'
    };

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: options,

        /*
         * Watch
         */

        watch: {
            sass: {
                files: ["<%= config.src %>/styles/sass/*.css.scss", "<%= config.src %>/styles/sass/*.scss"],
                tasks: ['sass', 'autoprefixer']
            },
            css: {
                files: ["<%= config.src %>/styles/*.css"],
                options: {
                    livereload: true
                }
            },
            slim: {
                files: ['<%= config.src %>/templates/slim/*.slim', '<%= config.src %>/*.slim'],
                tasks: ['slim', 'wiredep'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: ['<%= config.src %>/templates/jade/*.jade', '<%= config.src %>/*.jade'],
                tasks: ['jade', 'wiredep'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ["<%= config.src %>/*.html"],
                tasks: ['htmlhint'],
                options: {
                    livereload: true
                }
            }
        },

        /*
         * HtmlHint
         */

        htmlhint: {
            options: {
                'tag-pair': true,
                'tagname-lowercase': true,
                'attr-lowercase': true,
                'attr-value-double-quotes': true,
                'doctype-first': true,
                'spec-char-escape': true,
                'id-unique': true,
                'head-script-disabled': true,
                'style-disabled': true
            },
            src: ["<%= config.src %>/*.html"]
        },

        /*
         * Sass
         */

        sass: {
            files: {
                expand: true,
                cwd: '<%= config.src %>/styles/sass',
                src: ['*.css.scss', '*.scss'],
                ext: '.css',
                dest: '<%= config.src %>/styles'
            }
        },

        /*
         * Slim
         */

        slim: {
            src: {
                options: {
                    pretty: true
                },
                files: [
                    {
                        expand: true,
                        cwd: "<%= config.src %>/templates/slim",
                        src: ['*.slim'],
                        dest: "<%= config.src %>/templates",
                        ext: '.html'
                    },
                    {
                        expand: true,
                        cwd: "<%= config.src %>",
                        src: ['*.slim'],
                        dest: "<%= config.src %>",
                        ext: '.html'
                    }
                ]
            }
        },

        /*
         * Jade
         */

        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: "<%= config.src %>/templates/jade",
                        src: [ '*.jade' ],
                        ext: '.html',
                        dest: '<%= config.src %>/templates'
                    },
                    {
                        expand: true,
                        cwd: "<%= config.src %>",
                        src: [ '*.jade' ],
                        ext: '.html',
                        dest: '<%= config.src %>'
                    }
                ]
            }
        },

        /*
         * Vendor prefixes
         */

        autoprefixer: {
            files: {
                expand: true,
                flatten: true,
                src: '<%= config.src %>/styles/*.css',
                dest: '<%= config.src %>/styles/'
            }
        },

        /*
         * Wiredep
         * Automatically inject Bower components into the app
         */

        wiredep: {
            task: {
                src: ['<%= config.src %>/index.html']
            }
        },

        /*
         * Browser Sync
         */

        browserSync: {
            bsFiles: {
                src : [
                    "<%= config.src %>/*.html",
                    "<%= config.src %>/templates/*.html",
                    "<%= config.src %>/styles/*.css",
                    "<%= config.src %>/scripts/**/*.js"
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "<%= config.src %>"
                }
            }
        }
    });

    grunt.registerTask('default', ["browserSync", "watch", "wiredep"]);

};