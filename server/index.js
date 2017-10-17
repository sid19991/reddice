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
import webpackHotMiddleWare from 'webpack-hot-middleware';
import users from './routes/users';
import auth from './routes/auth';
import bodyParser from 'body-parser';
let app = express();
app.use(bodyParser.json());
app.use('/api/users',users);
app.use('/api/auth',auth)
const compiler=webpack(webpackConfig);
app.use(webpackMiddleWare(compiler,{
    hot:true,
    publicPath:webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleWare(compiler))
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})
const server = app.listen(3000,()=>{console.log('Running on localhost:3000')
server.keepAliveTimeout = 0;    
});

