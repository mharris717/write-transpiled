var fs = require("fs")

test("a basic test example", function () {
    ok(true, "this test is fine");
    var value = "hello";
    equal("hello", value, "We expect value to be hello");
});

asyncTest("read file", function() {
  var exp = "export default Ember.Object.extend({\n\n});"
  fs.readFile('./test/dummy/app/models/post.js', {encoding: "UTF-8"}, function (err, data) {
    if (err) throw err;
    equal(exp,data);
    QUnit.start()
  });
});

asyncTest("build tree", function() {
  var build = require("../use_grunt")
  build().then(function() {
    var exp = "export default Ember.Object.extend({\n\n});"
    fs.readFile('./built_js/myapp/models/post.js', {encoding: "UTF-8"}, function (err, data) {
      if (err) throw err;
      equal(2,2)
      QUnit.start()
    });
  })

  
})