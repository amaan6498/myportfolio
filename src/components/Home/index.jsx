// src/Home.js
import { Component } from "react";
import 'animate.css'
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="container-1">
          <h1 className="head loader">Hi, I am Amaan Peshimam</h1>
          <h5 className="headr load-job"> MERN Stack Developer</h5>
          <h5 className="para load-job">
            I am passionate about crafting modern, intuitive solutions using 
            latest technologies. My mission is to solve real-world problems and 
            create applications that make a lasting impact, all while keeping 
            things simple, streamlined, and effective.
          </h5>
          <div className="btn">
            <a href="/Amaan%20(Resume).pdf" download="amaan-resume.pdf" className="btnn">Download CV</a>
            <img src="https://img.icons8.com/?size=100&id=365&format=png&color=ffffff" alt="icon" className="imgh"/>
          </div>
        </div>
        <div className="container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="profile"
          />
        </div>
      </div>
    );
  }
}

export default Home;
