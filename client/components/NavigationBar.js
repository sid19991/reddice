/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import {Link} from 'react-router-dom';
class NavigationBar extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Red Dice</Link>
          </div>

          <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
          <li>
              <Link to="/signup">Sign Up</Link>
                </li>
          <li>
              <Link to="/login">Login</Link>
                </li>
                </ul>
          </div>
        </div>
      </nav>
                )
    }
}
export default NavigationBar

