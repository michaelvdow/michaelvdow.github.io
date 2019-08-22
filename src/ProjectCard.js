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
                                <i className={tool.icon}></i>
                                {tool.name ? <p>{tool.name}</p> : null}
                            </div>
                        ))}
                    </div>
                    <div className="links">
                        {this.props.links? this.props.links.map(link => (
                            <div className="link">
                                <a className="linkText" href={link.url} target="_blank"><p>{link.name}</p></a>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        )
    }

}

export default ProjectCard;