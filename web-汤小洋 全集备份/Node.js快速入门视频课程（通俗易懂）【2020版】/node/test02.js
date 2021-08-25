/**
 * 搭建一个HTTP服务器，处理HTTP请求并响应
 */

// 加载http模块，用来创建HTTP服务器
var http = require('http'); 

// 创建一个HTTP服务器
var server = http.createServer(function(request,response){ // 参数request表示请求对象，参数response表示响应对象
    // 处理请求
    // console.log('接收到一个请求。。。。');
    console.log(request.url);

    // 响应客户端，指定响应头信息
    response.writeHead(200,{
        'Content-Type':'text/html'
    });
    // 响应数据
    response.write('<h1>welcome</h1>');
    response.write('<h1>to</h1>');
    response.write('<h1>node.js</h1>');
    response.end(); // 响应结束
});

// 启动服务器，监听8888端口的请求
server.listen(8888,function(){
    console.log('服务器启动，开始监听8888端口。。。。。');
});