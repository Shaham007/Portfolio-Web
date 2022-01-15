import React from 'react'
import styles from "../components/Navbar.css";

function Navbar() {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");


   

    
    return (
        <div className='navbar-main'>
            <nav className='Navbar'>
                <ul className="nav-links nav-menu" >
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About Me</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact info</a></li>
                </ul>
                <div className="hamburger" >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
