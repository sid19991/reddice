/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';
export default function setAuthorizationToken(token){
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer${token};`
        }
        else{
            delete axios.defaults.headers.common['Authorization'];
        }
}

