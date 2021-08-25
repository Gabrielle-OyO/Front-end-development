/**
 * 文件夹模块
 *  1.要求文件夹下必须存在index.js或package.json文件
 *  2.如果同时存在，则package.json优先级更高
 *  3.如果存在package.json文件，会自动加载package.json文件中main指向的文件
 * 
 * 加载模块时如果省略后缀名：
 *  1.先查找 独立文件模块
 *      .js ————> .json  ————> .node
 *  2.再查找 文件夹模块
 *      package.json ————> index.js
 */

var module4 = require('./modules/module4'); // 直接指定文件夹名即可，会自动查找文件夹下的index.js或package.json文件
var module5 = require('./modules/module5');

// console.log(module4);
console.log(module5);