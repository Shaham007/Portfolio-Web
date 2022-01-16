import React from 'react'
import styles from "../components/About.css";
import Image2 from '../image/dsghttt.png';

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
                                <p> I sucessfully completed Front-End Developer course on Udemy(online learning platform) 
                                I am motivated and enthuasastic to work with proffessionls JavaScript and React Developers
                                I am always keen to learn more</p>
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
