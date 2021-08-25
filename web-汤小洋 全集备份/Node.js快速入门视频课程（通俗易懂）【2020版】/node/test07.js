/**
 * 第三方模块的使用
 */

// 加载模块时如果没有指定路径，而是直接指定模块名，则加载的是核心模块或第三方模块
var axios = require('axios'); 

// 发送ajax请求
axios.get('https://gitee.com/api/v5/users/tangyang8942')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
