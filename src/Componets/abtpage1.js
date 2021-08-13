import React from 'react'
import { NavLink } from 'react-router-dom';

const abtpage1 = () => {
    return (
        <div>
            


             {/* -------------------------- Page info section -------------------------------- */}


	<section className="page-info-section set-bg" style={{backgroundImage: `url(img/page-top-bg/1.jpg)`}}>
    
    <div className="pi-content">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 text-white">
                    <h2>Video Gallery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.</p>
                </div>
            </div>
        </div>
    </div>
</section>


{/* -------------------------- Page info section ------------------------------ */}


{/* ------------------------- Page section ---------------------------- */}

<section className="page-section recent-game-page spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-md-12">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/1.jpg" alt="gme1" />
                                <div className="cata new">racing</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Suspendisse ut justo tem por, rutrum</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="star" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="heart" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    {/* <div className="col-md-6">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/2.jpg" alt="gme2" />
                                <div className="cata racing">racing</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Susce pulvinar metus nulla, vel  facilisis sem </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="star" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="heart" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <div className="col-md-6">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/3.jpg" alt="gme3" />
                                <div className="cata adventure">Adventure</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Susce pulvinar metus nulla, vel  facilisis sem </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="star" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="heart" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <div className="col-md-6">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/4.jpg" alt="gme4" />
                                <div className="cata new">racing</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Suspendisse ut justo tem por, rutrum</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="star" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="heart" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <div className="col-md-6">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/5.jpg" alt="gme5" />
                                <div className="cata racing">racing</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Susce pulvinar metus nulla, vel  facilisis sem </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="star" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="heart" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <div className="col-md-6">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/6.jpg" alt="gme6" />
                                <div className="cata adventure">Adventure</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Susce pulvinar metus nulla, vel  facilisis sem </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="star" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="heart" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <div className="col-md-6">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/7.jpg" alt="gme7" />
                                <div className="cata new">racing</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Suspendisse ut justo tem por, rutrum</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <div className="col-md-6">
                        <div className="recent-game-item">
                            <div className="rgi-thumb set-bg">
                                <img src="img/recent-game/8.jpg" alt="gme8" />
                                <div className="cata racing">racing</div>
                            </div>
                            <div className="rgi-content">
                                <h5>Susce pulvinar metus nulla, vel  facilisis sem </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                                <a href="#" className="comment">3 Comments</a>
                                <div className="rgi-extra">
                                    <div className="rgi-star"><img src="img/icons/star.png" alt="star" /></div>
                                    <div className="rgi-heart"><img src="img/icons/heart.png" alt="heart" /></div>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
                <div className="site-pagination">
                    <NavLink exact to = "/Blogtab">01.</NavLink>
                    <span className="active"><NavLink exact to = "/Blogtab2">02.</NavLink></span>
                    <NavLink exact to = "/Blogtab3">03.</NavLink>
                    
                </div>
            </div> */}

            {/* --------------------------- sidebar -------------------------------- */}
            <div className="col-lg-4 col-md-7 sidebar pt-5 pt-lg-0">


                {/* ------------------------ widget -------------------------------- */}
                <div className="widget-item">
                    <form className="search-widget">
                        <input type="text" placeholder="Search" />
                        <button><i className="fa fa-search"></i></button>
                    </form>
                </div>


                {/* ----------------------- widget ---------------------------- */}
                <div className="widget-item">
                    <h4 className="widget-title">Latest Posts</h4>
                    <div className="latest-blog">
                        <div className="lb-item">
                            <div className="lb-thumb set-bg">
                                <img src="img/latest-blog/1.jpg" alt="blg1" />
                            </div>
                            <div className="lb-content">
                                <div className="lb-date">June 21, 2018</div>
                                <p>Ipsum dolor sit amet, consectetur adipisc ing consecips</p>
                                <a href="#" className="lb-author">By Admin</a>
                            </div>
                        </div>
                        <div className="lb-item">
                            <div className="lb-thumb set-bg">
                                <img src="img/latest-blog/2.jpg" alt="blg2" />
                            </div>
                            <div className="lb-content">
                                <div className="lb-date">June 21, 2018</div>
                                <p>Ipsum dolor sit amet, consectetur adipisc ing consecips</p>
                                <a href="#" className="lb-author">By Admin</a>
                            </div>
                        </div>
                        <div className="lb-item">
                            <div className="lb-thumb set-bg">
                                <img src="img/latest-blog/3.jpg" alt="blg3" />
                            </div>
                            <div className="lb-content">
                                <div className="lb-date">June 21, 2018</div>
                                <p>Ipsum dolor sit amet, consectetur adipisc ing consecips</p>
                                <a href="#" className="lb-author">By Admin</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --------------------------- widget ------------------------------- */}

                <div className="widget-item">
                    <h4 className="widget-title">Top Comments</h4>
                    <div className="top-comment">
                        <div className="tc-item">
                            <div className="tc-thumb set-bg">
                                <img src="img/authors/1.jpg" alt="auth1" />
                            </div>
                            <div className="tc-content">
                                <p><a href="#">James Smith</a> <span>on</span> Lorem consec ipsum dolor sit amet, co</p>
                                <div className="tc-date">June 21, 2018</div>
                            </div>
                        </div>
                        <div className="tc-item">
                            <div className="tc-thumb set-bg">
                                <img src="img/authors/2.jpg" alt="auth2" />
                            </div>
                            <div className="tc-content">
                                <p><a href="#">Michael James</a> <span>on</span>Cras sit amet sapien aliquam</p>
                                <div className="tc-date">June 21, 2018</div>
                            </div>
                        </div>
                        <div className="tc-item">
                            <div className="tc-thumb set-bg">
                                <img src="img/authors/3.jpg" alt="auth3" />
                            </div>
                            <div className="tc-content">
                                <p><a href="#">Justin More</a> <span>on</span> Lorem ipsum dolor consecsit amet, co</p>
                                <div className="tc-date">June 21, 2018</div>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* ------------------------------- widget ------------------------------ */}
                <div className="widget-item">
                    <div className="feature-item set-bg">
                        <img src="img/features/1.jpg" alt="fet1" />
                        <span className="cata new">new</span>
                        <div className="fi-content text-white">
                            <h5><a href="#">Suspendisse ut justo tem por, rutrum</a></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <a href="#" className="fi-comment">3 Comments</a>
                        </div>
                    </div>
                </div>


                {/* ---------------------------- widget ----------------------------------- */}
                <div className="widget-item">
                    <div className="review-item">
                        <div className="review-cover set-bg">
                            <img src="img/review/1.jpg" alt="rev1" />
                            <div className="score yellow">9.3</div>
                        </div>
                        <div className="review-text">
                            <h5>Assasin’’s Creed</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</section>


{/* -------------------------------- Page section end ---------------------------------------------- */}
        </div>
    )
}

export default abtpage1
