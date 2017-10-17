/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Validator from 'validator';
import {isEmpty} from 'lodash';
export default function validateInput(data){
        let errors={};
        if(!data.identifier){
            errors.identifier = "This field is required"
        }
        if(!data.password){
            errors.password = "This field is required"
        }
            return{
                errors,
                isValid:isEmpty(errors)
            }
}
