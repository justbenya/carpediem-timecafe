module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		},
		watch: {
            css: {
                files: ["less/**/*.less"],
                tasks: ["less"],
                options: {
                    livereload: true,
                    debounceDelay: 2000
                }
            }
        },
				connect: {
				  test: {
				    options: {
				      port: 8000,
				      base: '.'
				    }
				  }
				},
        concat: {
            js: {
                src:["js/*.js"],
                dest:"js/build/production.js"
            }
        },
        uglify: {
            jsMin:{
                src:"js/build/production.js",
                dest:"js/build/production.min.js"
            }
        },
        cssmin: {
            cssMin:{
                src:"css/style.css",
                dest:"css/style.min.css"
            }
        },
        imagemin:{
            dynamic: {
                files: [{
                    expand: "true",
                    cwd: "img/",
                    src: ["**/*.{png,jpg,svg}"],
                    dest: "img/compressed/"
                }]
            }
        }
    });
   	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('server', ['less', 'watch']);
    grunt.registerTask('production', ['concat', 'uglify', 'cssmin']);
};
