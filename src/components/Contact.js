import React from 'react'
import styles from "../components/Contact.css";

function Contact() {
  return (
  <div className='Contact' id='Contact'>
  <div className='Contact-content'>
    <section className='Contact-section'>
        <div className='container'>
            
            <div className='row'>
              <div className='contact-form'>
                <form>
                      <div className='inner-row'>
                                      
                          <div className='input-group'>
                              <input type="text" placeholder='First Name' className='input-control' required></input>
                          </div>
                          <div className='input-group'>
                               <input type="text" placeholder='Last Name' className='input-control' required></input>
                          </div>
                          <div className='input-group'>
                            <input type="text" placeholder='Email' className='input-control' required></input>
                          </div>
                          <div className='input-group'>
                             <textarea type="text" placeholder='Message' className='input-control' required></textarea>
                          </div>
                          <div className='submit-btn'>
                            <button className='contact-button' ><span>Send <i class="far fa-paper-plane"></i></span> </button>
                          </div>
                      </div>
                  </form>
              </div>
              {/* <div className='contact-info'>
                  <div className='contact-info-item'>
                     <h3>Email</h3>
                    <p>example@gmail.com</p>
                  </div>
                <div className='contact-info-item'>
                        <h3>Phone</h3>
                        <p>+48 884 *** ***</p>
                </div>
                   <div className='contact-info-item'>
                       <h3>My Social Links</h3>
                        <div className='social-links'>
                            <a href='#' target="_blank"> <i className='fas fa-facebook'></i></a><a href='#' target="_blank"> <i className='fas fa-'></i></a>
                            <a href='#' target="_blank"> <i className='fas fa-instagram'></i></a><a href='#' target="_blank"> <i className='fas fa-'></i></a>
                            <a href='#' target="_blank"> <i className='fas fa-'></i></a><a href='#' target="_blank"> <i className='fas fa-'></i></a>
                            <a href='#' target="_blank"> <i className='fas fa-'></i></a><a href='#' target="_blank"> <i className='fas fa-'></i></a>
                            <a href='#' target="_blank"> <i className='fas fa-'></i></a><a href='#' target="_blank"> <i className='fas fa-'></i></a>
                        </div>
                   </div>
              </div> */}

              
            </div>
        </div>
    </section>
  </div> 
      
  </div>
  )
}

export default Contact;
