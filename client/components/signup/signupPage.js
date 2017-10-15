/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import SignUpForm from './SignupForm';
class SignUp extends React.Component{
    render(){
        return(
                <div className="row">
        <div className="col-md-4 col-md-offset-4">
        <SignUpForm/>
        </div>
        </div>    
                
                )
    }
}
export default SignUp

