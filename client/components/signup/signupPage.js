/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignUpForm from './SignupForm';
import {userSignupRequest} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';
class SignUp extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        const {userSignupRequest,addFlashMessage} = this.props;
    
        return(
                <div className="row">
        <div className="col-md-4 col-md-offset-4">
        <SignUpForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
        </div>
        </div>    
                
                )
    }
}
SignUp.propTypes = {
     userSignupRequest:PropTypes.func.isRequired,
     addFlashMessage:PropTypes.func.isRequired
}
export default connect(null, {userSignupRequest,addFlashMessage})(SignUp)

