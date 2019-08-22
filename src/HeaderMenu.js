import React from 'react';
import logo from './img/logo.png'
import './HeaderMenu.css'

function HeaderMenu() {
    return (
        <div className="HeaderMenu">
            <img src={logo} className="logo" alt="logo"/>
            <div>
                <a href="" className="headerLink">Resume</a>
                <a href="" className="headerLink">Resume</a>
            </div>
        </div>
    )
}

export default HeaderMenu;