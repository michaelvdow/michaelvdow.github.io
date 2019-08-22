import React from 'react'
import './Header.css'
import HeaderMenu from './HeaderMenu'
import arrow from './img/arrow.png'

function Header() {
    return (
        <div className="Header">
            <HeaderMenu/>
            {/* <div className="HeaderBody"> */}
                <h1 className="headerTitle">Hi, I’m Michael Dow.</h1>
                <h2 className="headerBody">I am a computer science major studying at University of Illinois at Urbana-Champaign graduating in May 2021.</h2>
                <div className="aboutMeDiv">
                    <h3 className="aboutMe"><a className="headerLink" href="#projects">View my projects!</a></h3>
                    <a href="#projects"><img src={arrow} className="arrow"></img></a>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Header;
