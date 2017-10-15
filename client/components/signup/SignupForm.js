/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import {map} from 'lodash'
import timezones from '../../data/timezones';
class signupForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:"",
            passwordConfirmation:"",
            timezone:""
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        const options = map(timezones,(val,key)=>
        <option key={val} value={val}>{key}</option>
        )
        return(
                <form onSubmit={this.onSubmit}>
                <h1>Join Our Community!</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
        <label className="control-label">Email</label>
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange}/>
                    </div>
        <div className="form-group">            
        <label className="control-label">Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange}/>
        </div>            
        <div className="form-group">
        <label className="control-label">Confirm Password</label>
                    <input type="password" className="form-control" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
        <label className="control-label">Timezone</label>
        <select className="form-control" name="timezone" value={this.state.timezone} onChange={this.onChange}>
            <option value="" disabled>Choose Your Timezone</option>
            {options}
                </select>
                            </div>                            
                
                <div className="form-group">
                <button className="btn btn-primary btn-lg">Sign Up</button>
                </div>
                </form>
                )
    }
}
export default signupForm

