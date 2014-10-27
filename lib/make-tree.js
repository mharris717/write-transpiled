module.exports = function(rootPath,appName) {
  if (!rootPath) rootPath = process.cwd();
  if (!appName) appName = "included-commands-test";
  var pickFiles = require('broccoli-static-compiler');
  var mergeTrees = require('broccoli-merge-trees');
  var compileModules = require('broccoli-es6-module-transpiler');
  
  function getPaths() {
    var fs = require('fs');
    var res = [];

    var subPaths = ["app","addon","tests/dummy/app"];
    for(var i=0;i<subPaths.length;i++) {
      var full = rootPath+"/"+subPaths[i];
      if (fs.existsSync(full)) {
        res.push(full);
      }
    }

    return res;
  }
  
 // var tree = mergeTrees([root+'/app',root+'/addon',root+"/tests/dummy/app"])
  var tree = mergeTrees(getPaths());
  // tree = pickFiles(tree, {
  //   srcDir: 'app',
  //   destDir: '/'
  // })

  // tree = pickFiles(tree, {
  //   srcDir: 'addon',
  //   destDir: '/'
  // })


  tree = pickFiles(tree, {
    srcDir: '/',
    destDir: appName
  });

  var transpiledLib = compileModules(tree, {
    moduleName: function(filePath) {
      return filePath.replace(/.js$/, '');
    }
  });

  return transpiledLib;
}