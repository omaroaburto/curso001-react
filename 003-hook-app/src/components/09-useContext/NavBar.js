import React from 'react';
import {NavLink} from 'react-router-dom';
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-3 border-bottom border-dark ">
            <div className="container-fluid">  
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink exact activeClassName="active border-top rounded-top border-bottom border-light" className="nav-link " to="/">Home</NavLink>
                    <NavLink exact activeClassName="active border-top rounded-top border-bottom border-light" className="nav-link" to="/login">Login</NavLink>
                    <NavLink exact activeClassName="active border-top rounded-top border-bottom border-light" className="nav-link" to="/about" >About</NavLink> 
                </div>
                </div>
            </div>
        </nav>
    )
}
