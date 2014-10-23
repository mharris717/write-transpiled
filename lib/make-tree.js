module.exports = function(rootPath) {
  if (!rootPath) rootPath = process.cwd()
  var pickFiles = require('broccoli-static-compiler');
  var mergeTrees = require('broccoli-merge-trees');
  var compileModules = require('broccoli-es6-module-transpiler');

  var root = rootPath
 // var tree = mergeTrees([root+'/app',root+'/addon',root+"/tests/dummy/app"])
  var tree = mergeTrees([root+'/app'])
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
    destDir: 'myapp'
  })

  var transpiledLib = compileModules(tree, {
    moduleName: function(filePath) {
      return filePath.replace(/.js$/, '');
    }
  });

  return transpiledLib
}