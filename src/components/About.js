import React from 'react'
import styles from "../components/About.css";
import Image2 from '../image/EEZR8278.JPG';

function About() {
    return (
        
        <div className='About' id='About'>
        <div className='about-content'>
            <section className='about-section'>
                <div className='container'>
                        <div className='row'>
                            <div className='about-img'>
                                <div className='about-img-box' style={{ backgroundImage: `url(${Image2})` }}></div>
                            </div>
                            <div className='about-text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna 
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit
                                   esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                                   sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum </p>
                                <h3>Skills :</h3>
                                <div className='skills'>
                                    <div className='skills-item'>HTML</div>
                                    <div className='skills-item'>CSS</div>
                                    <div className='skills-item'>JavaScript</div>
                                    <div className='skills-item'>Bootstrap</div>
                                    <div className='skills-item'>React</div>
                                    <div className='skills-item'>Git</div>
                                    <div className='skills-item'>Node.js</div>
                                </div>
                            </div>
                            
                        </div>
                </div>
            </section>
            </div>
        </div>
    )
}

export default About
