import React from 'react';
import { NavLink } from 'react-router-dom';
import Service from '../Pages/Service';

const Ourservice = () => {

    return(

        <React.Fragment>



<section className="site-section " id="services-section">
  
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center heading-section mb-5">
            <div className="paws">
              <span className="icon-paw"></span>
            </div>
            <h2 className="text-black mb-3">Our Services</h2>
            <p>We Provide many types of dog care services like Dog Walking, Puppy Care, Pet Sitting, Overnight Care, Pet Playtime, Speciality Services.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="">
            
            <div className="block_service">
              <img src="img/svg/dogger_checkup.svg" alt="Image mb-5" />
              <h3>Dog Checkup</h3>
              <p> Your vet will assess your dog thoroghly at a check-up to look for any signs of liness or other problems, and will check dog body condition, skin and fur, eyes and ears, teeth and mouth feel around the body. </p>
            </div>

          </div>
          <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up"  data-aos-delay="100">
            <div className="block_service">
              <img src="img/svg/dogger_dermatology.svg" alt="Image mb-5" />
              <h3>Dog Dermatology</h3>
              <p> Dermatologists specialize in the treatment of skin, hair, nail and ear problems in pets.Allergies are often the cause of these problems.pets can suffer from allergies,infections,skin conditions and other related issues. </p>
            </div>
          </div>
          <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up"  data-aos-delay="200">
            <div className="block_service">
              <img src="img/svg/dogger_bones.svg" alt="Image mb-5" />
              <h3>For Strong Teeth</h3>
              <p>Doggie dental care is just as important as vaccinations and other preventative health measures you take for your dog, brush your dog's teeth regularly and take them to the vet for annual exams and cleanings. </p>
            </div>
          </div>


          <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up"  data-aos-delay="">
            
            <div className="block_service">
              <img src="img/svg/dogger_veterinary.svg" alt="Image mb-5" />
              <h3>Dog First Aid</h3>
              <p>Your dog first aid kit should include, bandages a roll of self adhesive or creps bandage,surgical sticky tape, a box of cotton wool, a box of sterile absorbent, a thick towel, blunt ended scissors, preferably curved. </p>
            </div>

          </div>
          <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up"  data-aos-delay="100">
            <div className="block_service">
              <img src="img/svg/dogger_dryer.svg" alt="Image mb-5" />
              <h3>Dog Dryer</h3>
              <p>Regular grroming with a brush or comb will helpp keep your pet's hair in good condition by removing dirt, spreading natural oils throughout her coat preventing tangles and keepingher skin clean aand irriant. </p>
            </div>
          </div>
          <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up"  data-aos-delay="200">
            <div className="block_service">
              <img src="img/svg/dogger_veterinarian.svg" alt="Image mb-5" />
              <h3>Expert Veterinarian</h3>
              <p>Never give your dog medication that has not been prescribed by a veterinarian if you suspect that your animal has ingested a poisonous substance call your veterinarian. </p>
            </div>
          </div>
            
        </div>
      </div>
    </section>

    {/* --------------------------------DOG blog start------------------------------------ */}

    <section className="site-section" id="blog-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center heading-section mb-5">
            
            <h2 className="text-black mb-2">Dog Care Advice</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="/abtpage1"><img src="img/banner/dog_5.jpg" alt="Image" className="img-fluid" /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">How to Exercise dog?</a></h3>
                <span className="post-meta mb-3 d-block">April 21, 2021</span>
                <p>Dogs need exercise to burn calories, stimulate their minds and stay healthy Individual exercise needs vary based on breed or breed mix,sex, age and level of health. Exercise also tends to help dogs avoid boredom which can lead to destructive behaviors. Supervised fun and games will satisfy many of your pet's instinctual urges to dig herd chew retrieve and chase.</p>
                <p><a href="/abtpage1" className="">Read More..</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="100">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html"><img src="img/banner/dog_6.jpg" alt="Image" className="img-fluid" /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">How to Grooming dog?</a></h3>
                <span className="post-meta mb-3 d-block">April 22, 2021</span>
                <p>Help keep your dog clean and reduce shedding with frequent brushing.Check for fleas and ticks daily during warm weather Most dogs don't need to be bathed more than a few times a year. Before bathing comb or cut out all mats from the coat. Carefully rinse all soap out of the coat or the dirt will stick to soap residue.</p>
                <p><a href="#" className="">Read More..</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html"><img src="img/banner/dog_11.jpg" alt="Image" className="img-fluid " /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">How to Training Pets?</a></h3>
                <span className="post-meta mb-3 d-block">April 23, 2021</span>
                <p>Dogs need exercise to burn calories, stimulate their minds and stay healthy Individual exercise needs vary based on breed or breed mix,sex, age and level of health. Exercise also tends to help dogs avoid boredom which can lead to destructive behaviors. Supervised fun and games will satisfy many of your pet's instinctual urges to dig herd chew retrieve and chase.</p>
                <p><a href="#" className="">Read More..</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="100">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html"><img src="img/banner/dog_10.jpg" alt="Image" className="img-fluid" /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">Nutrients Your Dog Needs</a></h3>
                <span className="post-meta mb-3 d-block">April 24, 2021</span>
                <p>Nutrients are substances obtained from food and used by an animal as a source of energy and as part of the metabolic machinery necessary for maintenance and growth.There are the six essential classes of nutrients dogs need for optimum healthy living,Adult dogs require sufficient nutrients to meet energy needs and to maintain and repair body tissues.</p>
                <p><a href="#" className="">Read More..</a></p>
              </div>
            </div>
          </div>




          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html"><img src="img/banner/dog_4.jpg" alt="Image" className="img-fluid " /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">How to make first aid for your dog when in the house</a></h3>
                <span className="post-meta mb-3 d-block">April 25, 2021</span>
                <p>Your dog first aid kit should include, bandages a roll of self adhesive or creps bandage,surgical sticky tape, a box of cotton wool, a box of sterile absorbent, a thick towel, blunt ended scissors, preferably curved Your vet will assess your dog thoroghly at a check-up to look for any signs of liness or other problems.</p>
                <p><a href="#" className="">Read More..</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="100">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html"><img src="img/banner/dog_9.jpg" alt="Image" className="img-fluid" /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">How to Happy your dog?</a></h3>
                <span className="post-meta mb-3 d-block">April 26, 2021</span>
                <p>Nutrients are substances obtained from food and used by an animal as a source of energy and as part of the metabolic machinery necessary for maintenance and growth.There are the six essential classes of nutrients dogs need for optimum healthy living,Adult dogs require sufficient nutrients to meet energy needs and to maintain and repair body tissues.</p>
                <p><a href="#" className="">Read More..</a></p>
              </div>
            </div>
          </div> 






          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html"><img src="img/banner/dog_1.jpg" alt="Image" className="img-fluid " /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">Should I Brush My Dog's Teeth?</a></h3>
                <span className="post-meta mb-3 d-block">April 27, 2021</span>
                <p>Absolutely Doggie dental care is just as important as vaccinations and other preventative health measures you take for your dog. just like in humans, dogs are are prone to tartar and plaque,which can build up and travel below the gum line,causing gingivitis,periodontits,and in extreme cases, blood infections.it's estimated that by two years old,Most dogs will have some from of dental disease,but this is easily preventable when you brush your dog's teeth regularly.</p>
                <p><a href="/abtpage1" className="">Read More..</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-up"  data-aos-delay="100">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html"><img src="img/banner/dog_2.jpg" alt="Image" className="img-fluid" /></a>
              </figure>
              <div className="blog-entry-text">
                <h3><a href="single.html">What Vaccinations Should My Dog Have?</a></h3>
                <span className="post-meta mb-3 d-block">April 28, 2021</span>
                <p>Dogs are usually required to have an annual rabies vaccine. to prevent the spread of this dangerous disease, include the rabies vaccine as a part of the core vaccines those recommended by most vets for all dogs before bringing your dog to a daycare or dog park be sure to go over the vaccination requirements,and talk to your vet about the best way to keep your dog safe from disease.</p>
                <p><a href="#" className="">Read More..</a></p>
              </div>
            </div>
          </div> 

        </div>
      </div>


    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item active"><NavLink exact to ="/service" className="page-link">1</NavLink></li>
        <li className="page-item"><a className="page-link" href="/page2">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
     
      
    </section>

    



















    

        </React.Fragment>
    )
};

export default Ourservice;