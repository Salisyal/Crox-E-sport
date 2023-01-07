import React from 'react'
import Layout from '../components/Layout'

export default function games() {
  return (
    <>
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
    </Layout>
    </>
  )
}
