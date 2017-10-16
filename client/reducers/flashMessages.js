/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {ADD_FLASH_MESSAGE} from '../actions/types';
import shortid from 'shortid';
export default (state=[],action={})=>{
        switch(action.type){
            case ADD_FLASH_MESSAGE:
            return [
                        ...state,
                        {
                            id:shortid.generate(),
                            type:action.message.type,
                            text:action.message.text
                        }
            ]
            default:return state
        }
        
}

