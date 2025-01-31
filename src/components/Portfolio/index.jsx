import Navbar from '../Navbar'
import Home from '../Home';
import About from '../About';
import Skills from '../skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

import { Component } from "react";


class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio">
                <Navbar />
                <Home />
                <section id='about'>
                    <About />
                </section>
                <section id='skills'>
                    <Skills />
                </section>
                <section id='projects'>
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <Footer />
            </div>
        )
    }
}
export default Portfolio