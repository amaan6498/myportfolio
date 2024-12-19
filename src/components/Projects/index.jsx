import { Component } from "react";
import './index.css';

const projects = [
    {
        name: 'Event Management System',
        img: 'https://media.licdn.com/dms/image/C4E12AQE8VlZt4I9NWA/article-cover_image-shrink_600_2000/0/1633541755284?e=2147483647&v=beta&t=Z1jNNre59eoHglRFJ08J1OA3Gfmww3cmA4bnWgb3rXo',
        description: 'Events Buffer is an online platform that centralizes event information, allowing users to easily discover and register for events based on their interests. It dynamically updates features to ensure a responsive and up-to-date user interface',
        tools: ['HTML', 'CSS', 'JS', 'Bootstrap', 'MySQL']
    },{
        name: 'Gesture Recognization',
        img: 'https://media.licdn.com/dms/image/v2/D5612AQGN3EdrFCyEeg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662353833082?e=2147483647&v=beta&t=epAaG-AaRUH5GLaQltk4wvBZdeJpkmXv70LhNuR42W8',
        description: 'This tool helps the deaf and mute communicate by converting sign language gestures into sentences and audio for better understanding. It is designed for individuals who know sign language to express themselves more easily.',
        tools: ['Python', 'OpenCV', 'TensorFlow', 'CNN']
    },{
        name: 'Portfolio',
        img: 'https://img.freepik.com/premium-vector/portfolio-creative-text-banner-with-black-background-illustration_755074-98.jpg',
        description: 'An interactive website designed to showcase my web development skills, from dynamic front-end interfaces to robust back-end solutions. It highlights my expertise in creating seamless, user-focused web applications with modern technologies.',
        tools: ['React', 'CSS', 'JS',  'Node.js', 'animate.css']
    }
];

class Projects extends Component{
    render(){
        return(
            <div className="projects">
                <h1>My Projects</h1>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-icon">
                                <img src={project.img} alt={project.name} className="pro-img" />
                            </div>
                            <h3>{project.name}</h3>
                            <p className="para">{project.description}</p>
                            <div className="tech-stack-container">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="tech-stack">{tool}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;
