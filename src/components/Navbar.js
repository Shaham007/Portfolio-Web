import React, {Component, useState} from 'react'
import styles from "../components/Navbar.css";

function Navbar() {


    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

   

    // hamburger.addEventListener("click", () => {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // })


    // document.querySelectorAll(".nav-links").forEach(
    //     n => n.addEventListener("click", () => {
    //         hamburger.classList.remove("active");
    //         navMenu.classList.remove("active");
    //     }))


    return (
        <div className='navbar-main'>
            <nav className='Navbar'>
                <ul className="nav-links ">
                    <li className="nav-item"><a className="nav-link  link_1" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link  link_2" href="#About"
                        style={{borderColor:"red"}}>About Me</a></li>
                    <li className="nav-item"><a className="nav-link  link_3" href="#portfolio"
                        style={{ borderColor: "#FFE162" }}>Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link  link_4" href="#Contact"
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
