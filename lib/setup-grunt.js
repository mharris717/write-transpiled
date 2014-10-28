module.exports = function(grunt,appName,destPath) {
  if (!destPath) destPath = "transpiled_js";

  grunt.loadNpmTasks('grunt-broccoli')
  grunt.initConfig({
    broccoli: {
      transpiled: {
        dest: destPath,
        config: function() {
          var rootPath = "/code/orig/ember-cli-pagination"
          return require("./make-tree")(rootPath,appName);
        }
      }
    }
  });
};