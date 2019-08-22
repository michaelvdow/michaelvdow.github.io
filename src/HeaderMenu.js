import React from 'react';
import logo from './img/logo.png'
import './HeaderMenu.css'
import resume from './img/resume.pdf'

function HeaderMenu() {
    return (
        <div className="HeaderMenu">
            <img src={logo} className="logo" alt="logo"/>
            <div>
                <a href={resume} target="_blank" className="headerLink">Resume</a>
                <a href="#contact" className="headerLink">Contact</a>
            </div>
        </div>
    )
}

export default HeaderMenu;