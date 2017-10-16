/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Validator from 'validator';
import {isEmpty} from 'lodash';
export default function validateInput(data){
  
    let errors={}
    if(!data.username){
        errors.username = "This field is required";
    }
    if(!data.email){
        errors.email = "This field is required";
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if(!data.password){
        errors.password = "This field is required";
    }
        if(!data.passwordConfirmation){
        errors.passwordConfirmation = "This field is required";
    }
    if(!Validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = "Passwords must match";
    }
    if(!data.timezone){
        errors.timezone = "This field is required";
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}

