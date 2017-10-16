/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import path from 'path';
import webpack from 'webpack';
export default  {
        devtool:'eval-source-map',
        entry:[
            
            'webpack-hot-middleware/client',
            path.join(__dirname,'/client/index.js'),
        ],
        output:{
            path:'/',
            publicPath:'/'
        },
        plugins:[
          new webpack.NoEmitOnErrorsPlugin(), 
           new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.HotModuleReplacementPlugin()
         
        ],
        module:{
            loaders:[
                {
                    test:/\.js$/,
                    include:[path.join(__dirname,'client'),path.join(__dirname,'server/shared')],
                    loaders:['react-hot-loader/webpack','babel-loader']
                }
            ]
        },
        resolve:{
            extensions:['.js']
        }
}

