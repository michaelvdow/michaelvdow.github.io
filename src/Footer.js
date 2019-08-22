import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div id="contact" className="footer">
            <h2 className="contactTitle">Contact Me</h2>
            <div className="contactLinks">
                <a className="contactLink" href="https://github.com/michaelvdow">GitHub</a>
                <a className="contactLink" href="https://www.linkedin.com/in/michaelvdow/">Linkedin</a>
                <a className="contactLink" href="mailto:michaelvdow@gmail.com">Email</a>
            </div>
        </div>
    )
}

export default Footer;