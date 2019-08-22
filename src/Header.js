import React from 'react'
import './Header.css'
import HeaderMenu from './HeaderMenu'
import arrow from './img/arrow.png'

function Header() {
    return (
        <div className="Header">
            <HeaderMenu/>
            {/* <div className="HeaderBody"> */}
                <p className="headerTitle">Hi, I’m Michael Dow.</p>
                <p className="headerBody">I am a computer science major studying at University of Illinois at Urbana-Champaign graduating in May 2021.</p>
                <div className="aboutMeDiv">
                    <p className="aboutMe"><a className="link" href="#projects">View my projects!</a></p>
                    <a href="#projects"><img src={arrow} className="arrow"></img></a>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Header;
