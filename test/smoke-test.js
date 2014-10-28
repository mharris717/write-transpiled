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