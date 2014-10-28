var makeTree = require("./lib/make-tree");

// var tree = makeTree('.',"myapp");

var brocPlugin = require("grunt-broccoli/lib/plugin")

var rootPath = "./test/dummy"
var dest = "built_js"
var appName = "myapp"
var config = function() {
  return makeTree(rootPath,appName);
}

function buildTree() {
  return brocPlugin.build(dest,config).then(function(output) {
    console.log("in then")
    console.log('Build successful (' + Math.floor(output.totalTime / 1e6) + 'ms)');
  }, function(err) {
    console.log(err);
  })
}

function hello() {
  setTimeout(function() {
    console.log("hello")
  },100)
}

// process.nextTick(buildTree)
// console.log("done")

module.exports = buildTree