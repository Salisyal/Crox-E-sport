import React from 'react'
import Layout from '../components/Layout'



export default function index() {
  return (
    <Layout>
        <section className="popular_games_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Most Popular Games</h2>
                        <figure className="mb-5">
                            <img src="images/popular_games_logo.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="tabs-box tabs-options">
                    <ul className="nav nav-tabs">
                        <li><a className="active" data-toggle="tab" href="#all">ALL</a></li>
                        <li><a data-toggle="tab" href="#origin">ORIGIN</a></li>
                        <li><a data-toggle="tab" href="#playstation">PLAYSTATION 4</a></li>
                        <li><a data-toggle="tab" href="#steam">STEAM</a></li>
                        <li><a data-toggle="tab" href="#uplay">UPLAY</a></li>
                        <li><a data-toggle="tab" href="#xbox">XBOX ONE</a></li>
                    </ul>
                    <div className="tab-content">
                        <div id="all" className="tab-pane fade in active show">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_1.jpg" alt="" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" alt="" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Pubg</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_2.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Call Of Duty</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_3.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Fortnite</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_4.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Anthem</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_5.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Battle Field</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_6.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Mass Effect</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_7.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>A Way Out</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_8.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>War Friends</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="origin" className="tab-pane fade">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_1.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Pubg</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_2.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Call Of Duty</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div id="playstation" className="tab-pane fade">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_3.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Fortnite</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_4.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Anthem</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div id="steam" className="tab-pane fade">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_5.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Battle Field</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_6.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Mass Effect</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div id="uplay" className="tab-pane fade">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_7.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>A Way Out</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_8.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>War Friends</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div id="xbox" className="tab-pane fade">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_1.jpg" alt="" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" alt="" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Pubg</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="popular_content padding_bottom">
                                        <div className="popular_upper_portion">
                                            <figure className="mb-0 img_width"><img src="images/popular_games_3.jpg" /></figure>
                                            <div className="hover_box_plus"><a href="#"><figure className="mb-0"><img src="images/box_hover_plus.png" /></figure></a></div>
                                        </div>
                                        <div className="popular_lower_portion_wrapper">
                                            <div className="popular_lower_portion">
                                                <div className="popular_span_wrapper">
                                                    <span>Fortnite</span>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section className="gaming_tournament-section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-md-0 pr-sm-none">
                        <div className="gaming_tournament_image">
                            <figure className="mb-0">
                                <img className="img-fluid" src="images/gaming_tournament_img.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-md-0 pl-sm-none">
                        <div className="gaming_tournament_content">
                            <h2 className="text-left mb-0">Gaming Tournaments On One Place.</h2>
                            <figure className="mb-0">
                                <img className="img-fluid" src="images/gaming_tournament_logo.png" alt="" />
                            </figure>
                            <p className="sub_p mb-0">
                              Gapai impian mu menjadi seorang gamers Professional dengan Crox E-Sport lalu bertandinglah dikanca Nasional dan Internasional.
                            </p>
                            <p className="sub_p mb-4 d-lg-block d-none">
                              Gapai impian mu menjadi seorang gamers Professional dengan Crox E-Sport lalu bertandinglah dikanca Nasional dan Internasional.
                            </p>
                            <div className="btn_wrapper">
                                <a className="text-decoration-none readmore_btn" href="./about.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="upcoming_matches_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Upcoming Matches</h2>
                        <figure className="mb-5">
                            <img src="images/upcoming_matches_logo.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-table align-item-center">
                        <div className="upcoming_matches_content padding_bottom">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="first_portion">
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_1.png" alt="" />
                                        </figure>
                                        <div className="vs_wrapper">
                                            <span>VS</span>
                                        </div>
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_2.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="center_portion">
                                        <p className="mb-0">Call Of Duty Tournament</p>
                                        <div className="center_span_wrapper">
                                            <i className="fa-solid fa-calendar-days mr-1" aria-hidden="true"></i><span className="mr-3">March 29,2021</span>
                                            <i className="fa-regular fa-clock mr-1"></i><span>4:00 Pm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="last_portion">
                                        <div className="last_span_wrapper">
                                            <span className="groups">2 Groups</span>
                                            <span className="players">32 Players</span>
                                        </div>
                                        <div className="last_span_wrapper2">
                                            <span className="groups">Prize Pool</span>
                                            <span className="players">$5000</span>
                                        </div>
                                        <a href="#"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-table align-item-center">
                        <div className="upcoming_matches_content mb-4 padding_bottom">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="first_portion">
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_1.png" alt="" />
                                        </figure>
                                        <div className="vs_wrapper">
                                            <span>VS</span>
                                        </div>
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_2.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="center_portion">
                                        <p className="mb-0">Battlefield-4 Tournament</p>
                                        <div className="center_span_wrapper">
                                            <i className="fa-solid fa-calendar-days mr-1" aria-hidden="true"></i><span className="mr-3">March 29,2021</span>
                                            <i className="fa-regular fa-clock mr-1"></i><span>4:00 Pm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="last_portion">
                                        <div className="last_span_wrapper">
                                            <span className="groups">2 Groups</span>
                                            <span className="players">32 Players</span>
                                        </div>
                                        <div className="last_span_wrapper2">
                                            <span className="groups">Prize Pool</span>
                                            <span className="players">$5000</span>
                                        </div>
                                        <a href="#"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-table align-item-center">
                        <div className="upcoming_matches_content mb-4 padding_bottom">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="first_portion">
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_1.png" alt="" />
                                        </figure>
                                        <div className="vs_wrapper">
                                            <span>VS</span>
                                        </div>
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_2.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="center_portion">
                                        <p className="mb-0">Anthem Tournament</p>
                                        <div className="center_span_wrapper">
                                            <i className="fa-solid fa-calendar-days mr-1" aria-hidden="true"></i><span className="mr-3">March 29,2021</span>
                                            <i className="fa-regular fa-clock mr-1"></i><span>4:00 Pm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="last_portion">
                                        <div className="last_span_wrapper">
                                            <span className="groups">2 Groups</span>
                                            <span className="players">32 Players</span>
                                        </div>
                                        <div className="last_span_wrapper2">
                                            <span className="groups">Prize Pool</span>
                                            <span className="players">$5000</span>
                                        </div>
                                        <a href="#"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-table align-item-center">
                        <div className="upcoming_matches_content mb-2 padding_bottom">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="first_portion">
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_1.png" alt="" />
                                        </figure>
                                        <div className="vs_wrapper">
                                            <span>VS</span>
                                        </div>
                                        <figure className="mb-0">
                                            <img src="images/upcoming_matches_2.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="center_portion">
                                        <p className="mb-0">Pubg ClassNameic Tournament</p>
                                        <div className="center_span_wrapper">
                                            <i className="fa-solid fa-calendar-days mr-1" aria-hidden="true"></i><span className="mr-3">March 29,2021</span>
                                            <i className="fa-regular fa-clock mr-1"></i><span>4:00 Pm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="last_portion">
                                        <div className="last_span_wrapper">
                                            <span className="groups">2 Groups</span>
                                            <span className="players">32 Players</span>
                                        </div>
                                        <div className="last_span_wrapper2">
                                            <span className="groups">Prize Pool</span>
                                            <span className="players">$5000</span>
                                        </div>
                                        <a href="#"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn_wrapper">
                    <a className="text-decoration-none viewall_btn" href="./match_detail.html">View All</a>
                </div>  
            </div>
        </section>
        <section className="live_stream_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Check Our Live Streaming</h2>
                        <figure className="mb-5">
                            <img src="images/live_stream_logo.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="row first_row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="position-relative">
                            <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/d1c81f1e-849f-4d45-ae57-b61c2f5db34a/25628048.mp4">
                                <figure className="mb-0">
                                    <img className="thumb" style={{cursor: "pointer"}}  src="images/live_stream_1.png" alt="" />
                                </figure>
                            </a>
                            <div className="match_span_wrapper">
                                <span>Match</span>
                            </div>
                            <h4>Team League - Fortnite Game</h4>
                        </div>
                    </div>
                </div>
                <div className="row second_row" data-aos="fade-up">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="position-relative margin_left">
                            <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/c94f907b-66a2-4041-a664-3be8d01fcfc0/23832137.mp4">
                                <figure className="mb-0">
                                    <img className="thumb" style={{cursor: "pointer"}} src="images/live_stream_2.png" alt="" />
                                </figure>
                            </a>
                            <div className="match_span_wrapper">
                                <span>Match</span>
                            </div>
                            <h4>Call Of Duty Tournament</h4>
                        </div>
                    </div> 
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="position-relative padding_left">
                            <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/7a94de6e-224a-47c6-9c42-b94ac2db4140/29352653.mp4">
                                <figure className="mb-0">
                                    <img className="thumb" style={{cursor: "pointer"}}  src="images/live_stream_3.png" alt="" />
                                </figure>
                            </a>
                            <div className="match_span_wrapper">
                                <span>Match</span>
                            </div>
                            <h4>Anthem Game War</h4>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <section className="products_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Explore Our Products</h2>
                        <figure className="mb-5">
                            <img src="images/products_logo.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-table align-item-center">
                        <div className="products_content padding_bottom">
                            <div className="upper_portion">
                                <figure className="mb-0"><img src="images/products_1.png" alt="" /></figure>
                            </div>
                            <div className="lower_portion_wrapper">
                                <div className="lower_portion">
                                    <h3>$44</h3>
                                    <h6>Gaming Handle</h6>
                                    <div className="socialmedia_icons_wrapper">
                                        <a href="./gallery.html"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-table align-item-center">
                        <div className="products_content padding_bottom">
                            <div className="upper_portion">
                                <figure className="mb-0"><img src="images/products_2.png" alt="" /></figure>
                            </div>
                            <div className="lower_portion_wrapper">
                                <div className="lower_portion">
                                    <h3>$50</h3>
                                    <h6>Headphones</h6>
                                    <div className="socialmedia_icons_wrapper">
                                        <a href="./gallery.html"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-table align-item-center">
                        <div className="products_content padding_bottom">
                            <div className="upper_portion">
                                <figure className="mb-0"><img src="images/products_3.png" alt="" /></figure>
                            </div>
                            <div className="lower_portion_wrapper">
                                <div className="lower_portion">
                                    <h3>$90</h3>
                                    <h6>T-Shirts</h6>
                                    <div className="socialmedia_icons_wrapper">
                                        <a href="./gallery.html"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="benefits_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="benefits-content">
                            <p className="join_benefit"><span>Join Us</span> As a Super Fans And</p>
                            <p className="benefit_span">Get All The Benefits</p>
                            <figure>
                                <img src="images/benefits_logo.png" alt="" />
                            </figure>
                            <p className="pp">
                                Quis nostrum exercitationem ullam corporis suscit labor iosam, nisi ut aliquid ex ea commodi conse aute irure dolor 
                                in reprehenderit in voluptateesse occaecat cuida at non proident, sunt in culpa qui officia deserun.
                            </p>
                        </div> 
                        <div className="btn_wrapper">
                            <a className="text-decoration-none joinus_btn" href="./signup.html">Join Now</a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <section className="blog_posts_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Latest Blog Posts</h2>
                        <figure className="mb-5">
                            <img src="images/blog_post_logo.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="blog_posts_content  padding_bottom">
                            <div className="upper_portion">
                                <figure className="mb-0"><img src="images/blog_post_1.jpg" alt="" /></figure>
                            </div>
                            <div className="lower_portion_wrapper">
                                <div className="lower_portion">
                                    <div className="span_wrapper">
                                        <i className="fa-solid fa-calendar-days" aria-hidden="true"></i><span> 25 Oct, 2020  |  by admin</span>
                                    </div>
                                    <a href="#" className="text-decoration-none" data-toggle="modal" data-target="#blog-model-1"><p className="mb-0">Magni dolores eos qui ratione voluptatem tempora incidunt sequi</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="blog_posts_content padding_bottom">
                            <div className="upper_portion">
                                <figure className="mb-0"><img src="images/blog_post_2.jpg" alt="" /></figure>
                            </div>
                            <div className="lower_portion_wrapper">
                                <div className="lower_portion">
                                    <div className="span_wrapper">
                                        <i className="fa-solid fa-calendar-days" aria-hidden="true"></i><span> 25 Oct, 2020  |  by admin</span>
                                    </div>
                                    <a href="#" className="text-decoration-none" data-toggle="modal" data-target="#blog-model-2"><p className="mb-0">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="blog_posts_content padding_bottom">
                            <div className="upper_portion">
                                <figure className="mb-0"><img src="images/blog_post_3.jpg" alt="" /></figure>
                            </div>
                            <div className="lower_portion_wrapper">
                                <div className="lower_portion">
                                    <div className="span_wrapper">
                                        <i className="fa-solid fa-calendar-days" aria-hidden="true"></i><span> 25 Oct, 2020  |  by admin</span>
                                    </div>
                                    <a href="#" className="text-decoration-none" data-toggle="modal" data-target="#blog-model-3"><p className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="get_in_touch_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Get In Touch With Us</h2>
                        <figure className="mb-5">
                            <img src="images/in_touch_logo.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="get_in_touch_content" data-aos="fade-up">
                    <form>
                        <div className="form-row pb-3">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input type="text" name="fname" id="fullname" className="form-control upper_layer_name margin_bottom" placeholder="Name" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input type="email" name="email" id="emailaddress" className="form-control upper_layer margin_bottom" placeholder="Email" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input type="tel" name="phone" id="phoneno" className="form-control upper_layer margin_bottom" placeholder="Phone" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <input type="text" name="msg" id="message" className="form-control lower_message margin_bottom" placeholder="Message" />
                            </div>
                        </div>

                        <div className="form_button_wrapper text-center">
                            <button type="submit" name="btnsubmit" id="submitbutton" className="button_style">Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section className="subscribe_section">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                        <figure className="robot mb-0">
                            <img src="images/subscribe_image.png" alt="" />
                        </figure>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                        <div className="subscribe_content">
                            <h2>Subscribe To Our Newsletter And Get <span>Speical Discounts</span></h2>
                            <form method="POST">
                                <div className="form-row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <input type="email" name="email" id="emailadd" className="form-control upper_layer" placeholder="Enter Your Email Address" />
                                        <div className="input-group-append form-button">
                                            <button className="btn subscribe_arrow" name="btnsubmit" id="submitbtn" type="submit"><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="blog-model-1" className="modal fade blog-model-con" tabIndex={-1} style={{display: "none"}} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i className="fa-solid fa-x"></i></span></button>
                  </div>
                  <div className="modal-body">
                      <div className="blog-box-item mb-0">
                          <div className="blog-img">
                              <figure className="mb-0">
                                  <img src="images/blog_post_1.jpg" alt="blog-img" className="img-fluid" />
                              </figure>
                          </div>
                          <div className="blog-content pl-0 pr-0">
                              <div className="blog-auteher-title">
                                  <span>By Elina Parker</span>
                                  <span className="float-lg-right">Sep 01, 2022</span>
                              </div>
                              <div className="span_wrapper">
                                  <i className="fa-solid fa-calendar-days" aria-hidden="true"></i><span> 25 Oct, 2020  |  by admin</span>
                              </div>
                              <p className="blog_p mb-0">Magni dolores eos qui ratione voluptatem tempora incidunt sequi</p>
                              <p className="pp">
                                  Quis nostrum exercitationem ullam corporis suscit labor iosam, nisi ut aliquid ex ea commodi conse aute irure dolor 
                                  in reprehenderit in voluptateesse occaecat cuida at non proident, sunt in culpa qui officia deserun.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.
                              </p>
                              <h2>Get In Touch With Us</h2>
                              <form className="contact-form blog-model-form">
                                  <div className="row">
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-group mb-0">    
                                          <input type="text" className="form_style" placeholder="Name" name="name" /> 
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-group mb-0">
                                          <input type="email" className="form_style" placeholder="Email" />
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-group mb-0">    
                                          <input type="tel" className="form_style" placeholder="Phone" /> 
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-group mb-0">    
                                          <input type="text" className="form_style" placeholder="Subject" />  
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className=" form-group mb-0">    
                                          <textarea className="form_style" rows={3} name="comments"></textarea>
                                          </div>
                                      </div>
                                  </div>
                                  <button type="submit" className="appointment-btn">Submit</button>
                              </form>
                          </div>
                      </div>
                  </div>
            </div>
          </div>
        </div>
        <div id="blog-model-2" className="modal fade blog-model-con" tabIndex={-1} style={{display: "none"}} aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i className="fa-solid fa-x"></i></span></button>
                    </div>
                    <div className="modal-body">
                        <div className="blog-box-item mb-0">
                            <div className="blog-img">
                                <figure className="mb-0">
                                    <img src="./images/blog_post_2.jpg" alt="blog-img" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="blog-content pl-0 pr-0">
                                <div className="blog-auteher-title">
                                    <span>By Elina Parker</span>
                                    <span className="float-lg-right">Sep 01, 2022</span>
                                </div>
                                <div className="span_wrapper">
                                    <i className="fa-solid fa-calendar-days" aria-hidden="true"></i><span> 25 Oct, 2020  |  by admin</span>
                                </div>
                                <p className="blog_p mb-0">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                                <p className="pp">
                                    Quis nostrum exercitationem ullam corporis suscit labor iosam, nisi ut aliquid ex ea commodi conse aute irure dolor 
                                    in reprehenderit in voluptateesse occaecat cuida at non proident, sunt in culpa qui officia deserun.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.
                                </p>
                                <h2>Get In Touch With Us</h2>
                                <form className="contact-form blog-model-form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">    
                                            <input type="text" className="form_style" placeholder="Name" name="name" /> 
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">
                                            <input type="email" className="form_style" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">    
                                            <input type="tel" className="form_style" placeholder="Phone" /> 
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">    
                                            <input type="text" className="form_style" placeholder="Subject" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className=" form-group mb-0">    
                                            <textarea className="form_style" rows={3} name="comments"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="appointment-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
        <div id="blog-model-3" className="modal fade blog-model-con" tabIndex={-1} style={{display: "none"}} aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i className="fa-solid fa-x"></i></span></button>
                    </div>
                    <div className="modal-body">
                        <div className="blog-box-item mb-0">
                            <div className="blog-img">
                                <figure className="mb-0">
                                    <img src="images/blog_post_3.jpg" alt="blog-img" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="blog-content pl-0 pr-0">
                                <div className="blog-auteher-title">
                                    <span>By Elina Parker</span>
                                    <span className="float-lg-right">Sep 01, 2022</span>
                                </div>
                                <div className="span_wrapper">
                                    <i className="fa-solid fa-calendar-days" aria-hidden="true"></i><span> 25 Oct, 2020  |  by admin</span>
                                </div>
                                <p className="blog_p mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                                <p className="pp">
                                    Quis nostrum exercitationem ullam corporis suscit labor iosam, nisi ut aliquid ex ea commodi conse aute irure dolor 
                                    in reprehenderit in voluptateesse occaecat cuida at non proident, sunt in culpa qui officia deserun.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.
                                </p>
                                <h2>Get In Touch With Us</h2>
                                <form className="contact-form blog-model-form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">    
                                            <input type="text" className="form_style" placeholder="Name" name="name" /> 
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">
                                            <input type="email" className="form_style" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">    
                                            <input type="tel" className="form_style" placeholder="Phone" /> 
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group mb-0">    
                                            <input type="text" className="form_style" placeholder="Subject" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className=" form-group mb-0">    
                                            <textarea className="form_style" placeholder="Message" rows={3} name="comments"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="appointment-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
      </Layout>
        
  )
}
