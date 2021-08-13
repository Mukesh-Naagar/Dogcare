import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(

        <React.Fragment>

{/* ------------------------------------ Preloader Start ---------------------------------- */}
    <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="static/img/logo/logo.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    {/* --------------------------- Preloader Start ---------------------------------- */}
   

   {/* ------------------------------ Header Start ------------------------------ */}
   
   <header>
        <div className="header-area ">
            <div className="header-top_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className="short_contact_list">
                                <ul>
                                    
                                    <li><a href="#">Mon - Sat 10:00 - 7:00</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 ">
                            <div className="social_media_links">
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-pinterest-p"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3">
                            <div className="logo">
                                <NavLink exact to ="/">
                                    <img src="img/logo.png" className="img-fluid" alt="" width="70px" height="60px" />
                                    </NavLink>
                            
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><NavLink exact to ="/">home</NavLink></li>
                                        <li><NavLink exact to ="/about">about</NavLink></li>
                                        <li><NavLink exact to ="/service">services</NavLink></li>
                                        <li><NavLink exact to ="/contact">Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>



        </React.Fragment>
    )
};

export default Navbar;