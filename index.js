var setupGrunt = require("./lib/setup-grunt");

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