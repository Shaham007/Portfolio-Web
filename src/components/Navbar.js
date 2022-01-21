import React, {useState} from 'react'
import styles from "../components/Navbar.css";

function Navbar() {

   

    return (
        <div className='navbar-main'>
            <nav className='Navbar'>
                <ul className="nav-links ">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#About"
                        style={{borderColor:"red"}}>About Me</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio"
                        style={{ borderColor: "#FFE162" }}>Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#Contact"
                     style={{border:"none" , paddingRight:"0"}}>Contact</a></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar