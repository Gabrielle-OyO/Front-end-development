/**
 * module.exports和exports
 */
var name = 'tom';

var calc = function(num1,num2){
    return num1+num2;
}

var user = {
    id:1001,
    username:'tom',
    password:'123'
}

// 使用module.exports（推荐）
module.exports = {
    name,calc,user
}

// 使用exports
// exports = module.exports; // 简单来说，exports就是module.exports的别名
// exports.name = name; 
// exports.calc = calc;
// exports.user = user;

// console.log(module);
// console.log(module.exports);
// console.log(exports); 
