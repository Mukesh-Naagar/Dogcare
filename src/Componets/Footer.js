import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer =() => {

    return(

        <React.Fragment>

{/* ---------------------------------- footer_start  ------------------------------- */}
    <footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Contact Us
                            </h3>
                            <ul className="address_line">
                                <li>+123 4567 890</li>
                                <li><a href="#">Demomail@gmail.Com</a></li>
                                <li>001, Delhi, New Delhi, India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3  col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Our Servces
                            </h3>
                            <ul className="links">
                                <li><a href="#">Pet Insurance</a></li>
                                <li><a href="#">Pet surgeries </a></li>
                                <li><a href="#">Dog Adoption</a></li>
                                <li><a href="#">Dog Training</a></li>
                                <li><a href="#">Dog Care Advice</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3  col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Quick Link
                            </h3>
                            <ul className="links">
                                <li><NavLink exact to ="/about">About Us</NavLink></li>
                                <li><NavLink exact to ="/service">Terms of Service</NavLink></li>
                                <li><NavLink exact to ="/contact">Contact Us</NavLink></li>
                                <li><NavLink exact to ="/page2">Dog Services</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3 ">
                        <div className="footer_widget">
                            <div className="footer_logo">
                            
                                   <NavLink exact to = "/"><img src="img/logo.png" className="img-fluid" alt="" width="70px" height="60px" /></NavLink>
                               
                            </div>
                            <p className="address_text">123 E 5th flour, New delhi 
                                 10003, India
                            </p>
                            <div className="socail_links">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ti-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="container">
                <div className="bordered_1px"></div>
                <div className="row">
                    <div className="col-xl-12">
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* ---------------------------------- footer_end  ----------------------------------- */}


        </React.Fragment>
    )
};

export default Footer;