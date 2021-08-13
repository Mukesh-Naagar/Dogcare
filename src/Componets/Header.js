import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(

        <React.Fragment>


{/* ------------------------ Slider Area Start ---------------------------------- */}
        

    <div className="slider_area">
    {/* <div style ={{ backgroundImage: `url(/img/banner/dog.jpg)`,
                    backgroundRepeat: 'no-Repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'auto'}}> */}
        <div className="single_slider slider_bg_1 d-flex align-items-center img-fluid">
       
            <div className="container">
                <div className="row">
               
                   
                    <div className="col-lg-5 col-md-6">
                        <div className="slider_text">
                            <h3>We Care <br></br> <span>Your Pets</span></h3>
                            <p>We always try to provide your dog the best services. <br></br> adipiscing elit, sed do eiusmod.</p>
                            <NavLink exact to = "/contact" className="boxed-btn4"> Contact Us</NavLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="slider_bg_1 img-fluid">
                
            </div> */}
        </div>
  


    {/* ------------------------------------ slider_area_end ----------------------------------- */}

        </React.Fragment>
    )
};

export default Header;