var fs = require("fs")

test("a basic test example", function () {
    ok(true, "this test is fine");
    var value = "hello";
    equal("hello", value, "We expect value to be hello");
});

var sourcePost = "export default Ember.Object.extend({\n\n});"
var transpiledPost = 'define("myapp/models/post",\n  ["exports"],\n  function(__exports__) {\n    "use strict";\n    __exports__["default"] = Ember.Object.extend({\n\n    });\n  });'
// asyncTest("read file", function() {
//   fs.readFile('./test/dummy/app/models/post.js', {encoding: "UTF-8"}, function (err, data) {
//     if (err) throw err;
//     equal(exp,data);
//     QUnit.start()
//   });
// });

asyncTest("build tree", function() {
  var writeTree = require("../lib/write-tree")
  writeTree("./test/dummy","built_js","myapp").then(function() {
    fs.readFile('./built_js/myapp/models/post.js', {encoding: "UTF-8"}, function (err, data) {
      if (err) throw err;
      equal(data,transpiledPost);
      QUnit.start()
    });
  });
})

var exec = require('child_process').exec

var getTmpDir = function() {
  var i = parseInt(Math.random()*10000000000.0)
  return "tmp/"+i
}

asyncTest("call bin - smoke", function() {
  exec("echo abc", function(error,stdout,stderr) {
    equal(stdout.trim(),"abc")
    QUnit.start()
  })
})

asyncTest("call bin", function() {
  var outputDir = getTmpDir()
  exec("./bin/write-transpiled --source ./test/dummy --output "+outputDir, function(error,stdout,stderr) {
    fs.readFile(outputDir+'/myapp/models/post.js', {encoding: "UTF-8"}, function (err, data) {
      if (err) throw err;
      equal(data,transpiledPost);
      QUnit.start()
    });
  })
})