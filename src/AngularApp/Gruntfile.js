module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-task')
    // configure plugins
    grunt.initConfig({
        uglify: {
            my_target: {
                files: { 'wwwroot/app.js': ['Scripts/app.js', 'Scripts/**/*.js'] }
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify']
            }
        },

        copy: {
            main: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: ['bower_components/angular/*.js', 'bower_components/bootstrap/*.css'],
                dest: 'wwwroot/dist/'
            }
        },

        bower: {
            install: {
                options: {
                    targetDir: 'wwwroot/dist/lib',
                    layout: 'byComponent',
                    install: false,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        }
       
    });

    // define tasks
    grunt.registerTask('default', ['uglify', 'watch','bower']);

};