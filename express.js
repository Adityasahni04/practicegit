var express=require('express');
var app=express();
var db=require('./database.js')
app.get('/',(req,res)=>
{
    res.send("hello world");
    res.end();
});
app.get('/home',(req,res)=>
{
    res.send("wellcome to home sir")
})
app.get('/home/menu',(req,res)=>{
res.send("kya khaye ga bhai ")
});
app.get('/home/menu/pizza',(req,res)=>
{
    pizza1={
         name:"pizza",
         size:"L|M|S",
         spices:"chilli"
    };
    res.send(pizza1)
})
app.listen(8080,()=>{
    console.log(`listing port 8080`);
});