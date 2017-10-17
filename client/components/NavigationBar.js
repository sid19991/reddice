/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions'
class NavigationBar extends React.Component{
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
        const {isAuthenticated} = this.props.auth
        const userLinks = (
                <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="#" onClick={this.logout}>Log Out</a>
                </li>
                
                </ul>
                );
        const guestLinks = (
          <ul className="nav navbar-nav navbar-right">
          <li>
              <Link to="/signup">Sign Up</Link>
                </li>
          <li>
              <Link to="/login">Login</Link>
                </li>
                </ul>      
                );
        return(
                <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Red Dice</Link>
          </div>

          <div className="collapse navbar-collapse">
            {isAuthenticated?userLinks:guestLinks}
          </div>
        </div>
      </nav>
                )
    }
}
NavigationBar.propTypes={
    auth:PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired
}
function mapStateToProps(state){
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps,{logout})(NavigationBar)

