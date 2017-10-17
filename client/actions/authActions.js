/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {SET_CURRENT_USER} from './types'
import jwt from 'jsonwebtoken';
export function setCurrentUser(user){
    return {
        type:SET_CURRENT_USER,
        user
    }
}
export function login(data){
    return dispatch=>{
        return axios.post('/api/auth',data).then((res)=>{
            const token=res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token)
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}

