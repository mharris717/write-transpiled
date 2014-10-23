module.exports = function(grunt) {
  grunt.registerTask('say-hello', function() {
    grunt.log.write("Hello").ok()
  })
}