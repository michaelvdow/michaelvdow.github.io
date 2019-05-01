import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./data.js";
import "../App.css"

class Header extends Component {
    render() {
        return (
            <div id="header">
                <Jumbotron fluid="false">
                    <Container>
                        <p id="mainTitle">Hi, I'm Michael Dow</p>
                        <p id="titleSubtext">I'm a sophomore studying Computer Science at the University of Illinois at Urbana-Champaign</p>
                        <a id="learnMoreText">Learn more about me!</a>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;