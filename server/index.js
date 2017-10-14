/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleWare from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';
let app = express();
app.use(webpackMiddleWare(webpack(webpackConfig)));
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})
app.listen(3000,()=>console.log('Running on localhost:3000'));

