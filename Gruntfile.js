/*global module:true */
module.exports = function (grunt) {
	grunt.initConfig({
		jsdoc2md: {
			docs: {
				src: 'spook-utils.js',
				dest: 'README.md'
			}
		}
	});

	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.registerTask('default', 'jsdoc2md');
};