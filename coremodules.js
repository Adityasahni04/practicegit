const _ = require('lodash');

const arr = [1, 2, 4, 2, 2, 1, 2, 2, 1, 3, 4, 3, 1, 3, 4, 13, 1, 4];
const filteredArray = _.uniq(arr);

console.log(filteredArray);

//1 core module
// var http=require("http")
// http.createServer((req,res)=>
// {
//  res.write("hello vro its me aditya");
//  res.end();
// }).listen(8080);

//2 coremodule
// var fs=require('fs');
// fs.readFile('main.js','utf8',(err,res)=>
// {
//     if(err) throw err;
//     console.log(res);
// })
// result=fs.readFileSync('main.js','utf8');
// console.log(result);
// function add(a,b,hello){
//     return a+b;
// }
// var add=function(a,b){
//     return a+b;
// }
// var add=(a,b)=>a+b;
// var add=(a,b)=>
//     {
//         return a+b;
//         hello()
//     }
//     function hello(){
//         console.log("hello bro")
//     }
// (function myname(){
// console.log("my name is aditya");
// })();
// result=add(2,121);
// console.log(result)

// function add(a,b,callaback){
//     result=a+b;
//     console.log(result);
//     callaback();
// }
// add(3,4,()=>{
//     console.log("sum printed"));
// });
// })
// fs=require('fs');
// main=require('./main.js')
// data="hello bhai kya dek raha hai"
// os=require('os');
// user=os.userInfo();
// console.log(user)
// result=main.add(3,4);
// fs.writeFile('test.txt',data,(err)=>{
//     if (err) throw err;
//     console.log("file written success");
// })
// fs.appendFile('test.txt',data,()=>
// {
//     console.log("data added successfully"
// fs.readFile('test.txt','utf-8',(err,res)=>
// {
//    if(err) throw err;
//    console.log(res);
// })
// fs.writeFileSync('test.txt',data);
// console.log('data entered successfully');
// fs.appendFileSync('test.txt',data);
// console.log('data added successfully');
// result=fs.readFileSync('test.txt','utf-8');
// console.log(result);
