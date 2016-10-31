module.exports = function(grunt) {

	// The entire function

	grunt.initConfig({
		// where package json is
		pkg: grunt.file.readJSON('package.json'),

		// sass task
		sass: {
			dev: {
				options: {
					style: 'expanded',
					sourcemap: 'none',
					lineNumbers: true
				},
				files: {
					//where files will be put : origin
					'compiled/style-human.css': 'sass/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					//where files will be put : origin
					'compiled/style.css': 'sass/style.scss'
				}
			}
		},

		//autoprefixer
		autoprefixer: {
			options: {
				browsers : ['last 2 versions']
			},
			//prefix all files
			multiple_files: {
				expand: true,
				flatten: true,
				src:'compiled/*.css',
				dest: ''
			}
		},

		// watch task
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer']
			}
		}    // end watch task

		});   // end initconfig

	// load task runners
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');

	// register task
	grunt.registerTask('default', ['watch'] );

}