/**
 * Created by yang on 2015/12/29.
 */
module.exports = require('./lib/code.js');

//var http = require('http');
//
//var ccap = require('ccap')();//Instantiated ccap class
//
//http.createServer(function (request, response) {
//
//    if(request.url == '/favicon.ico')return response.end('');//Intercept request favicon.ico
//
//    var ary = ccap.get();
//
//    var txt = ary[0];
//
//    var buf = ary[1];
//
//    response.end(buf);
//
//    console.log(txt);
//
//}).listen(8124);