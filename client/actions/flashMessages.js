/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {ADD_FLASH_MESSAGE} from './types';
export function addFlashMessage(message){
    return {
        type:ADD_FLASH_MESSAGE,
        message
    }
}

