/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import express from 'express';
import validateInput from '../shared/validations/signup'
let router = express.Router()

router.post('/',(req,res)=>{
    const {errors, isValid}=validateInput(req.body);
    if(isValid){
        res.json({success:true});
    }else{
        res.status(400).json(errors);
    }
    
})
export default router

