/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Greetings from './components/greetings';
class routes extends React.Component{
    render(){
        return(
                <div>
            <Route path="/" component={App}/>
            
                  
        </div>
                )
    }
}
export default routes 

