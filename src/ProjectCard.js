import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="projectCard">
                <img className="cardImg" src={this.props.image}></img>
                <h2 className="cardTitle">{this.props.title}</h2>
                <p className="cardDescription">{this.props.description}</p>
            </div>
        )
    }

}

export default ProjectCard;