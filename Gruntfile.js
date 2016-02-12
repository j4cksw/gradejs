module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['src/**/*.js'],
                dest: 'grade.js',
            },
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['bower_components/angular/angular.js', 'grade.js'],
                    dest: 'build/js',
                    filter: 'isFile',
                    flatten: true
                }, {
                    expand: true,
                    src: ['index.html'],
                    dest: 'build',
                    filter: 'isFile',
                    flatten: true
                }]
            }
        },
        clean: ['grade.js', 'build'],
        mkdir: {
            all: {
                options: {
                    create: ['build']
                },
            },
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
    });

    grunt.registerTask('build', ['clean', 'concat', 'mkdir', 'copy']);
    grunt.registerTask('test', ['clean', 'concat', 'karma']);
};
