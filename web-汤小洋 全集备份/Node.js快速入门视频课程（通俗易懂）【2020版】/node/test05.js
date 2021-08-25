/**
 * 省略后缀名时模块的查找顺序
 *   .js ————>  .json ————> .node
 */
var module3 = require('./modules/module3'); // 导入模块时可以省略后缀名
console.log(module3);