import React from 'react'
import styles from "../components/main.css";
import Image from '../image/imga.jpg';

function Main() {
    return (
        <div className='main'>
            Navbar
            <div className='main-content'>
                <section className='home-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='home-text'>
                                <p>Hello It's</p>
                                <h1>Shaham Mazhar</h1>
                                <h2>Front End Developer</h2>
                                <a href='#' className='btn'> More About Me</a>
                                <a href='#' className='btn'> Portfolio</a>
                            </div>
                            <div className='home-img'>
                                <div className='img-box' style={{ backgroundImage: `url(${Image})` }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <h2> About Me</h2>
        </div>
    )
}

export default Main
