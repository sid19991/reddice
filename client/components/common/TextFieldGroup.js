/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
const TextFieldGroup = ({field,value,label,error,type,onChange,checkUserExists})=>{
    return(
            <div className={classname("form-group",{'has-error':error})}>
                    <label className="control-label">{label}</label>
                    <input type={type} 
                    className="form-control" 
                    name={field} 
                    value={value} 
        onBlur={checkUserExists}            
        onChange={onChange}/>
                    {error && <span className="help-block">{error}</span>}            
        </div>
            );
}
TextFieldGroup.propTypes = {
    field:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    error:PropTypes.string,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    chechkUserExists:PropTypes.func
}
TextFieldGroup.defaultProps = {
    type:'text'
}
export default TextFieldGroup

