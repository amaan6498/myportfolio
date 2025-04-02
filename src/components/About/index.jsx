import { Component } from "react";
import './index.css';

class About extends Component{
    render(){
        return (
            <div className="about">
                <div className="content">
                    <h1 className="title-about">About Me</h1>
                    <h1 className="header-about">Building Web Applications with Passion and Precision</h1>
                    <p className="para-about">Hi, I'm Peshimam Amaan- a Computer Science Engineering graduate based in Hyderabad, India, with a passion for turning challenges into opportunities. My portfolio is a testament to innovation, and my drive for continuous learning keeps me crafting solutions that make a difference. Whether you need help or just want to connect, feel free to reach out—let's create something amazing together! 😊</p>
                </div>
                <div className="image-content">
                    <img src="/img-1.jpg" alt="my-image" className="myimage"/>
                </div>
            </div>
        )
    }
}

export default About