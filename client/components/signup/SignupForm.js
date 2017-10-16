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
import classname from 'classnames';
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
            isLoading:false
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        this.setState({errors:{},isLoading:true});
        e.preventDefault();
        console.log(this.state);
        this.props.userSignupRequest(this.state).then(
                ()=>{}
                
                ).catch((data)=>{
                    this.setState({errors:data.response.data})
//        console.log(data.response);
        })
        this.setState({isLoading:false});
}
    render(){
        const {errors} = this.state;
        const options = map(timezones,(val,key)=>
        <option key={val} value={val}>{key}</option>
        )
        return(
                <form onSubmit={this.onSubmit}>
                <h1>Join Our Community!</h1>
                <div className={classname("form-group",{'has-error':errors.username})}>
                    <label className="control-label">Username</label>
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange}/>
                    {errors.username && <span className="help-block">{errors.username}</span>}            
        </div>
                    <div className={classname("form-group",{'has-error':errors.email})}>
        <label className="control-label">Email</label>
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange}/>
            {errors.email && <span className="help-block">{errors.email}</span>}                   
            </div>
        <div className={classname("form-group",{'has-error':errors.password})}>            
        <label className="control-label">Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange}/>
        {errors.password && <span className="help-block">{errors.password}</span>}            
                </div>            
        <div className={classname("form-group",{'has-error':errors.passwordConfirmation})}>
        <label className="control-label">Confirm Password</label>
                    <input type="password" className="form-control" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange}/>
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}            
                    </div>
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

