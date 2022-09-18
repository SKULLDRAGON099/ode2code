const express=require('express');
const bodyparser=require('body-parser');
const request=require('request');

const app=express();

app.listen(5500,function(){
    console.log('server is running')
}) 