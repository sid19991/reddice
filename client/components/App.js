/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import Greetings from './greetings';
import NavigationBar from './NavigationBar';
import {Route} from 'react-router-dom';
import SignupPage from './signup/signupPage';
class App extends React.Component{
    render(){    
        return(
                <div className="container">
                <NavigationBar/>
                <Route exact path="/" component={Greetings}/>
                        <Route path="/signup" component={SignupPage}/>
        </div>        
        )
    }
}
export default App;
