module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-broccoli')
  grunt.initConfig({
    broccoli: {
      transpiled: {
        dest: "transpiled_js3",
        config: require("./lib/make-tree")
      }
    }
  })
}