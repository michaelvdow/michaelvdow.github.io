import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    const projects = [
        {
            image: require('./img/cu-transit.png'),
            title: "CU Transit",
            description: "CU Transit is an Android app that tracks bus departures in Champaign-Urbana by using data from CUMTD (Champaign-Urbana Mass Transit District) in real-time. This app uses a REST API and SQLite database, and currently has 3800 active users.",
            tools: [
                {
                    name: "Java",
                    icon: "devicon-java-plain"
                },
                {
                    name: "Android",
                    icon: "devicon-android-plain colored"
                },
                {
                    name: "SQLite",
                    icon: "devicon-mysql-plain colored"
                }
            ],
            links: [
                {
                    name: "Google Play",
                    url: "https://play.google.com/store/apps/details?id=com.apps.michaeldow.cutransitcompanion&hl=en"
                }
            ]
        },
        {
            image: require('./img/research.png'),
            title: "Accelerometer-Based Counting of Arbitrary Repetitive Motions",
            description: "A research project completed at Loyola University Chicago from August 2015-May 2016. The purpose of the project was to create a program that could count the repetitions of any general motion rather than being tailored towards a specific exercise. We were able to achieve an accuracy of 80.75% which improved upon research done in other studies.",
            tools: [
                {
                    name: "Python",
                    icon: "devicon-python-plain colored"
                },
                {
                    name: "Android",
                    icon: "devicon-android-plain colored"
                }
            ],
            links: [
                {
                    name: "Research Paper",
                    url: "./researchPaper.pdf"
                },
                {
                    name: "Code",
                    url: "https://github.com/michaelvdow/RepetitionCounting"
                }
            ]
        },
        {
            image: require('./img/spotify.png'),
            title: "Spotify Visualizer",
            description: "Spotify Visualizer is a real-time music visualizer using the Spotify Web API for your currently playing songs. Visualizer uses the BPM and the major pitches provided by the audio analysis from Spotify. Random colors mode changes color of visualizer based on BPM of song.",
            tools: [
                {
                    name: "C++",
                    icon: "devicon-cplusplus-plain"
                }
            ],
            links: [
                {
                    name: "Code",
                    url: "https://github.com/michaelvdow/SpotifyVisualizer"
                }
            ]
        },
        {
            image: require('./img/robotics.png'),
            title: "FIRST Robotics",
            description: "Titan Robotics Team 2022. As a programming subteam, we coded the robot in Java using the WPILIB library which was used to create autonomous programs based on sensor readings.",
            tools: [
                {
                    name: "Java",
                    icon: "devicon-java-plain"
                },
                {
                    name: "Python",
                    icon: "devicon-python-plain colored"
                },
                {
                    name: "OpenCV"
                }
            ],
            links: [
                {
                    name: "Code",
                    url: "https://github.com/titan2022"
                }
            ]
        }
    ]
    return (
        <div id="projects" className="Projects">
            <h2 className="projectTitle">Projects</h2>
            <div className="projectCards">
                {projects.map((project) => (
                    <ProjectCard {...project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;