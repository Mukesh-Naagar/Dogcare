import React from 'react';
import { NavLink } from 'react-router-dom';

const Counsele = () => {

    return(

        <React.Fragment>



<section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img" style={{backgroundImage: 'url(img/bg_3.jpg)'}}>
			<div className="overlay"></div>
    	<div className="container">
    		<div className="row d-md-flex justify-content-end">
    			<div className="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5">
    				<h2 className="mb-4">Free Consultation</h2>
    				<form action="#" className="appointment">
    					<div className="row">
    						<div className="col-md-12">
									<div className="form-group">
			    					<div className="form-field">
	          					<div className="select-wrap">
	                      <div className="icon"><span className="fa fa-chevron-down"></span></div>
	                      <select name="" id="" className="form-control">
	                      	<option value="">Select services</option>
	                        <option value="">Cat Sitting</option>
	                        <option value="">Dog Walk</option>
	                        <option value="">Pet Spa</option>
	                        <option value="">Pet Grooming</option>
	                        <option value="">Pet Daycare</option>
	                      </select>
	                    </div>
			              </div>
			    				</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
			              <input type="text" className="form-control" placeholder="Your Name" />
			            </div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
			              <input type="text" className="form-control" placeholder="Vehicle number" />
			            </div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
			    					<div className="input-wrap">
			            		<div className="icon"><span className="fa fa-calendar"></span></div>
			            		<input type="text" className="form-control appointment_date" placeholder="Date" />
		            		</div>
			    				</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
			    					<div className="input-wrap">
			            		<div className="icon"><span className="fa fa-clock-o"></span></div>
			            		<input type="text" className="form-control appointment_time" placeholder="Time" />
		            		</div>
			    				</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
			              <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
			            </div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
			              <input type="submit" value="Send message" className="btn btn-primary py-3 px-4" />
			            </div>
								</div>
    					</div>
	          </form>
    			</div>
    		</div>
    	</div>
    </section>







    {/* ----------------------------------- contact-animal-owner Start --------------------------------- */}


    <div className=" section-bg">
		
            <div className="container">
			<div className="row justify-content-center">
			<div className="col-lg-4 phn1">
						<img src="img/banner/dog-2.png" className="img-fluid" alt="dog2" />
						</div>
                
                    <div className="col-lg-4 phn3">
                        <div className="contact_text text-center">
                            <div className="section_title text-center">
                                <h3>Any time you can call us!</h3>
                                <p>Because we know that even the best technology is only as good as the people behind it. 24/7 tech support.</p>
                            </div>
                            <div className="contact_btn d-flex align-items-center justify-content-center">
                                <NavLink exact to = "/contact" className="btn btn-danger boxed-btn">Contact Us</NavLink>
                                
                            </div>
                        </div>
                    </div>
                

				<div className="col-lg-4 phn2">
					
					<img src="img/banner/phone-1.png" className="img-fluid " alt="phone2" />
					</div>
					</div>
            </div>
        </div>
        {/* ----------------------------- contact-animal-owner End ----------------------------- */}


            </React.Fragment>
    )
};
export default Counsele;

 {/* <div className="section-bg">
            
                <div className="row">
					
                    <div className="col-lg-4 phn1">
						<img src="img/banner/dog-2.png" className="img-fluid" alt="dog2" />
						</div>
						<div className="col-lg-4 phn3">
                        <div className="contact_text text-center">
                            <div className="section_title text-center">
                                <h3>Any time you can call us!</h3>
                                <p>Because we know that even the best technology is only as good as the people behind it. 24/7 tech support.</p>
                            </div>
                            <div className="contact_btn d-flex align-items-center justify-content-center">
                                <a href="contact.html" className="btn btn-danger">Contact Us</a>
                                <p>Or<a href="#"> +880 4664 216</a></p>
                            </div>
                        </div>
                    </div>
				<div className="col-lg-4 phn2">
					<img src="img/banner/phone-1.png" className="img-fluid" alt="phone2" />
					</div>	
                </div>
            </div>
			 */}