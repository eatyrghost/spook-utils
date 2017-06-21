/*global module:true */
module.exports = function (grunt) {
	grunt.initConfig({
		jsdoc2md: {
			docs: {
				src: 'spook-utils.js',
				dest: 'README.md'
			}
		},
		uglify: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'./dist/spook-utils.min.js': ['./spook-utils.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.registerTask('default', ['jsdoc2md', 'uglify']);
};