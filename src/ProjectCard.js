import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="projectCard">
                <div>
                    <img className="cardImg" src={this.props.image}></img>
                    <h2 className="cardTitle">{this.props.title}</h2>
                    <p className="cardDescription">{this.props.description}</p>
                </div>
                <div className="cardLinks">
                    <div className="tools">
                        {this.props.tools.map(tool => (
                            <div className="tool">
                                <p>{tool.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="links">

                    </div>
                </div>
            </div>
        )
    }

}

export default ProjectCard;