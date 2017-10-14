/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import path from 'path';
export default  {
        devtools:'eval-source-map',
        entry:path.join(__dirname,'/client/index.js'),
        output:{
            path:'/'    
        },
        module:{
            loaders:[
                {
                    test:/\.js$/,
                    include:path.join(__dirname,'client'),
                    loaders:['babel-loader']
                }
            ]
        },
        resolve:{
            extensions:['.js']
        }
}

