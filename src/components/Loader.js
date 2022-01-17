import React from 'react'
import styles from "../components/Loader.css";

function Loader() {

    window.addEventListener("load", () =>{

        document.querySelector(".page-loader").classList.add("fade-out");

        setTimeout(()=> {
            document.querySelector(".page-loader").style.display = "none";
            
        }, 600);
    });

    return (
        <div className='page-loader'>
                <div></div>
                <div></div>
                <div></div>
        </div>
    )
}

export default Loader
