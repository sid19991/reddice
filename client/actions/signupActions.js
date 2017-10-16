/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';
export function userSignupRequest(userData){
    return dispatch=>{
        return axios.post('/api/users',userData);
    }
}

