/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import FlashMessage from './FlashMessage';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteFlashMessage} from '../../actions/flashMessages';
class FlashMessagesList extends React.Component{
    render(){
        const {deleteFlashMessage} = this.props
        const messages = this.props.messages.map(message=>
                <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage}/>  
                )
        return(
                <div>
                {messages}
                </div>
                )
    }
}
FlashMessagesList.propTypes={
    messages:PropTypes.array.isRequired,
    deleteFlashMessage:PropTypes.func.isRequired
}
function mapStateToProps(state){
    return {
        messages:state.flashMessages
    }
}
export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessagesList) 

