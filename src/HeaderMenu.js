import React from 'react';
import logo from './img/logo.png'
import './HeaderMenu.css'
import resume from './img/resume.pdf'

function HeaderMenu() {
    return (
        <div className="HeaderMenu">
            <img src={logo} className="logo" alt="logo"/>
            <div className="menuItems">
                <a href={resume} target="_blank" className="headerLink"><h2>Resume</h2></a>
                <a href="#contact" className="headerLink"><h2>Contact</h2></a>
            </div>
        </div>
    )
}

export default HeaderMenu;