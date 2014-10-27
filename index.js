var setupGrunt = function(grunt,appName) {
  grunt.loadNpmTasks('grunt-broccoli')
  grunt.initConfig({
    broccoli: {
      transpiled: {
        dest: "transpiled_js",
        config: function(rootPath) {
          return require("./lib/make-tree")(rootPath,appName);
        }
      }
    }
  })
};

if (true) {
  // var makeTree = require("./lib/make-tree")
  // var brocProg = require("./broc_prog")

  // var sup = {
  //   name: "wt:hello",

  //   run: function() {
  //     console.log("hello from write-transpiled");
  //     //return brocProg('app')
  //   }
  // };

  // var write = {
  //   name: "write-transpiled",

  //   run: function() {
      
  //   }
  // }

  // var big = {
  //   name: 'cordova:build',
  //   aliases: ['cdv:build'],
  //   description: 'Build the ember and cordova project together running in the simulator or on a device',
  //   works: 'insideProject',

  //   availableOptions: [
  //     { name: 'environment', type: String, default: 'development' },
  //     { name: 'platform', type: String, default: 'ios' }
  //   ],

  //   run: function() {
  //     console.log("cordova run");
  //   }
  // };

  module.exports = {
    name: "write-transpiled", 

    included: function() {
      console.log("in write-transpiled included")
    },

    // includedCommands: function() {
    //   return [sup]
    // },

    setupGrunt: setupGrunt
  }
}