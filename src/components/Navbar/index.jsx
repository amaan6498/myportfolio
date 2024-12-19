// src/Navbar.js
import { Component } from "react";
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <p>Portfolio</p>
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#skills">Skills</a></li>
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
