import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div id="contact" className="footer">
            <h1>Contact Me</h1>
            <div className="contactLinks">
                <a className="contactLink" href="https://github.com/michaelvdow">GitHub</a>
                <a className="contactLink" href="https://www.linkedin.com/in/michaelvdow/">Linkedin</a>
                <a className="contactLink" href="mailto:michaelvdow@gmail.com">Email</a>
            </div>
        </div>
    )
}

export default Footer;