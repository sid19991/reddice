/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import {map} from 'lodash'
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Redirect} from 'react-router';
import classname from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
class signupForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:"",
            passwordConfirmation:"",
            timezone:"",
            errors: "",
            isLoading:false,
            navigate:false
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    isValid(){
        const {errors,isValid} = validateInput(this.state);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit(e){
        
        e.preventDefault();
        let c = this
        if(this.isValid())
        {
            this.setState({errors:{}
        ,isLoading:true});
        this.props.userSignupRequest(this.state).then(
                ()=>{
                    
            c.setState({navigate:true});
                }
                
                ).catch((data)=>{
                    
                        console.log(data);
                            this.setState({errors:data.response.data
                        ,isLoading:false})
                        
        
        })
    }
    
        
}
    render(){
        const {errors} = this.state;
        const {navigate} = this.state
        const options = map(timezones,(val,key)=>
        <option key={val} value={val}>{key}</option>
        )
if(navigate){
    return <Redirect to="/" push={true}/>
}
        return(
                <form onSubmit={this.onSubmit}>
                <h1>Join Our Community!</h1>
                <TextFieldGroup
        error={errors.username}
        label="Username"
        onChange={this.onChange}
        value={this.state.username}
        field="username"
        />
                <TextFieldGroup
        error={errors.email}
        label="Email"
        onChange={this.onChange}
        value={this.state.email}
        field="email"
        />
                <TextFieldGroup
        error={errors.password}
        label="Password"
        onChange={this.onChange}
        value={this.state.password}
        field="password"
        type="password"
        />            
                <TextFieldGroup
        error={errors.passwordConfirmation}
        label="Confirm Password"
        onChange={this.onChange}
        value={this.state.passwordConfirmation}
        field="passwordConfirmation"
        type="password"
        />
                    <div className={classname("form-group",{'has-error':errors.timezone})}>
        <label className="control-label">Timezone</label>
        <select className="form-control" name="timezone" value={this.state.timezone} onChange={this.onChange}>
            <option value="" disabled>Choose Your Timezone</option>
            {options}
                </select>
                {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                            </div>                            
                
                <div className="form-group">
                <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
                </div>
                </form>
                )
    }
}
signupForm.propTypes = {
     userSignupRequest:PropTypes.func.isRequired
}
export default signupForm

