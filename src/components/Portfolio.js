import React from 'react'
import styles from "../components/Portfolio.css";
import PortfolioImg01 from '../image/IMG-7851.jpg';
import PortfolioImg06 from '../image/IMG-7856.jpg';




function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
        <div className='portfolio-content'>
            <section className='portfolio-section'>
                <div className='project-container'>
                        <div className='project-items portfolio-img-box' style={{ backgroundImage: `url(${PortfolioImg01})` }} > 
                            <a href=' https://shaham007.github.io/Personal-Website-01/' 
                            className='project-link' target="_blank"> View Project</a> 
                        </div>
                        <div className='project-items portfolio-img-box' style={{ backgroundImage: `url(${PortfolioImg01})` }} >
                            <a href='https://gracious-rosalind-758789.netlify.app'
                            className='project-link' target="_blank"> View Project</a> 
                          </div>
                        <div className='project-items portfolio-img-box' style={{ backgroundImage: `url(${PortfolioImg01})` }} > 
                            <a href=' https://shaham007.github.io/Personal-Website-01/' 
                            className='project-link' target="_blank"> View Project</a>
                         </div>
                        <div className='project-items portfolio-img-box' style={{ backgroundImage: `url(${PortfolioImg01})` }} >
                            <a href='https://thirsty-perlman-78585c.netlify.app'
                                className='project-link' target="_blank"> View Project</a>
                        </div>
                        <div className='project-items portfolio-img-box' style={{ backgroundImage: `url(${PortfolioImg01})` }} >
                            <a href=' https://shaham007.github.io/Personal-Website-01/'
                                className='project-link' target="_blank"> View Project</a>
                        </div>
                        <div className='project-items portfolio-img-box' style={{ backgroundImage: `url(${PortfolioImg01})` }} >
                            <a href='https://naughty-torvalds-b70f75.netlify.app'
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
