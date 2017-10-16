/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import classname from 'classnames';
import PropTypes from 'prop-types'
class FlashMessage extends React.Component{
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
onClick(){
    this.props.deleteFlashMessage(this.props.message.id);
}
    render(){
        const {id,type,text}=this.props.message
        return(
                <div className={classname('alert',{
                    'alert-success':type=='success',
            'alert-danger':type=='error'})}>
                    <button className="close" onClick={this.onClick}><span>&times;</span></button>    
            {text}
                </div>
                )
    }
}
FlashMessage.propTypes={
    message:PropTypes.object.isRequired,
    deleteFlashMessage:PropTypes.func.isRequired
}
export default FlashMessage;
