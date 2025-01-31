import { Component } from "react";
import './index.css';

class Navbar extends Component {
  state = {
    menuOpen: false, 
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="logo">
          <p>Portfolio</p>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={this.toggleMenu}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
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
