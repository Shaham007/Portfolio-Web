import React from 'react'
import styles from "../components/Portfolio.css";

function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
        <div className='portfolio-content'>
            <section className='portfolio-section'>
                <div className='project-container'>
                        <div className='project-items'> 
                            <a href=' https://shaham007.github.io/Personal-Website-01/' 
                            className='project-link' target="_blank"> View Project</a> 
                        </div>
                        <div className='project-items'>
                            <a href=' https://shaham007.github.io/Personal-Website-01/'
                            className='project-link' target="_blank"> View Project</a> 
                          </div>
                        <div className='project-items'> 
                            <a href=' https://shaham007.github.io/Personal-Website-01/' 
                            className='project-link' target="_blank"> View Project</a>
                         </div>
                         
                </div>
            </section>
        </div>

            <div className='portfolio-fotter'>
                <h2> Contact Me</h2>
            </div> 
        </div>
    )
}

export default Portfolio
