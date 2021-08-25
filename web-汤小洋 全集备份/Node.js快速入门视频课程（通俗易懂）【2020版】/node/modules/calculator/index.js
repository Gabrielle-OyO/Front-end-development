/**
 * 自定义模块
 */

var add = function (a,b){
    return a+b;
}

var substract =  function (a,b){
    return a-b;
}

var multiply = function (a,b){
    return a*b;
}

var divide = function (a,b){
    return a/b;
}



module.exports = {
    add,substract,multiply,divide
} 