var makeTree = require("./make-tree");
var brocPlugin = require("grunt-broccoli/lib/plugin")

// var rootPath = "./test/dummy"
// var dest = "built_js"
// var appName = "myapp"
// var config = function() {
//   return makeTree(rootPath,appName);
// }

// function buildTree() {
//   return brocPlugin.build(dest,config).then(function(output) {
//     console.log("in then")
//     console.log('Build successful (' + Math.floor(output.totalTime / 1e6) + 'ms)');
//   }, function(err) {
//     console.log(err);
//   })
// }

function writeTree(rootPath,destPath,appName) {
  var treeFunc = function() {
    return makeTree(rootPath,appName);
  }
  return brocPlugin.build(destPath,treeFunc);
}

module.exports = writeTree