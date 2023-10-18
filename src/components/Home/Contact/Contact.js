import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div id="contact">
      
            <article className="contact">
                <div className="container">
                    <div className="row">
                
                        <div className="col-md-6">
                        <div className="cont_area">
                            <div className="title">
                                <img src="/assets/images/email.svg"/>
                                <h3>send me a message</h3>
                            </div>
                            <form >
                               <div className="line">
                                <input type="text" placeholder="fullname"/>
                                <input type="email" placeholder="email"/>
                               </div>
                               <div className="line">
                                <input type="number" placeholder="phone"/>
                                <input type="text" placeholder="company name"/>
                               </div>
                               <div className="line">
                                <input type="text" placeholder="message"/>
                                
                               </div>
                              
                               <div className="line"><button>Send US <img src="/assets/images/send.svg"/></button></div>
                            </form>
                        </div>
                        </div>
                        <div className="col-md-6">
                       

                        <div className="another_area">
                        
                            
                        <div className="title">
                            <img src="/assets/images/email.svg"/>
                            <h3>contact us</h3>
                        </div>
                        <form >
                           <div className="line">
                            <div className="both">
                                <img src="/assets/images/phone.svg"/>
                                <h3>+918877890975</h3>
                            </div>
                            <div className="both">
                                <img src="/assets/images/home.svg"/>
                                <h3>Dhanbad,jharkhand India</h3>
                            </div>
                           </div>
                           <div className="line">
                           <div className="both">
                                <img src="/assets/images/email.svg"/>
                                <h3>aimraan204@gmail.com</h3>
                            </div>
                           </div>
                           
                          
                           
                        </form>
                    </div>

                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
