/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {combineReducers} from 'redux'
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth'
export default combineReducers({
        flashMessages,
        auth
})

