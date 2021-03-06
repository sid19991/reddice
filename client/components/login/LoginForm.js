/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup'
import validateInput from '../../../server/shared/validations/login';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';
class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            identifier:'',
            password:'',
            errors:{},
            isLoading:false,
            navigate:false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }
    isValid(){
        const {errors,isValid} = validateInput(this.state)
        if(!isValid){
            this.setState({errors});
        }
        return isValid
    }
    onSubmit(e){
        e.preventDefault()
        let c = this
        if(this.isValid()){
        console.log("onSubmit fired");
            this.setState({errors:{},isLoading:false})
            this.props.login(this.state).then(
                    (res)=>c.setState({navigate:true})
                    ).catch(function(err){
                        console.log(err)
                        c.setState({errors:err.response.data.errors,isLoading:false})
                    });
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        const {errors,identifier,password,isLoading}=this.state
        const navigate = this.state.navigate
        if(navigate){
            return (<Redirect to="/" push={true}/>)
        }
        return(
                <form onSubmit={this.onSubmit}>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}        
        <h1>Login</h1>
                <TextFieldGroup
                field="identifier"
                label="Username/Email"
                value={identifier}
                error={errors.identifier}
                onChange={this.onChange}
                />
                <TextFieldGroup
                field="password"
                label="password"
                value={password}
                error={errors.password}
                onChange={this.onChange}
                        type="password"
                />
                <div className="form-group">
                <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Login</button>
                </div>
                </form>
                )
    }
}
LoginForm.propTypes={
    login:PropTypes.func.isRequired
}
export default connect(null,{login})(LoginForm)
