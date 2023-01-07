import React from 'react'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout>
    <section className="fun_enjoy-section">
        <div className="container">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="fun_enjoy_content padding_bottom">
                        <h2 className="text-left">Play Fun And Enjoy The Games</h2>
                        <figure>
                            <img src="./images/fun_enjoy_logo.png" alt="" />
                        </figure>
                        <p className="sub_p">
                            Quis nostrum exercitationem ullam corporis suscit labor
                            iosam, nisi ut aliquid ex ea commodi conse aute irure 
                            dolor in reprehenderit in voluptateesse occaecat cuida
                            at non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.
                        </p>
                        <p className="sub_p mb-4 d-lg-block d-none">
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulle ariatur minima veniam 
                            uis nostrum exercitationem ullam corporis suscipit labo
                            nisi ut aliuid ex ea commodi conseuatur.
                        </p>
                        <div className="btn_wrapper">
                            <a className="text-decoration-none join_now_btn" href="./signup.html">Join Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="fun_enjoy_image">
                        <figure className="mb-0">
                            <img src="./images/fun_enjoy_image.jpg" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="our_team_section">
        <div className="container">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2>Our Team Members</h2>
                    <figure className="mb-5">
                        <img src="./images/team_member_logo.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="team_content padding_bottom">
                        <figure className="mb-0">
                            <img src="images/team_member_1.jpg" alt="" />
                        </figure>
                        <div className="member_name_span_wrapper">
                            <span>Senchy Dark</span>
                            <p>Pro-Player</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="team_content padding_bottom">
                        <figure className="mb-0">
                            <img src="images/team_member_2.jpg" alt="" />
                        </figure>
                        <div className="member_name_span_wrapper">
                            <span>Eleten Rampel</span>
                            <p>Pro-Player</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="team_content padding_bottom">
                        <figure className="mb-0">
                            <img src="images/team_member_3.jpg" alt="" />
                        </figure>
                        <div className="member_name_span_wrapper">
                            <span>Andre Park</span>
                            <p>Pro-Player</p>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="row" data-aos="fade-up">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="team_content padding_bottom">
                        <figure className="mb-0">
                            <img src="images/team_member_4.jpg" alt="" />
                        </figure>
                        <div className="member_name_span_wrapper">
                            <span>Jonathan Clark</span>
                            <p>Pro-Player</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="team_content padding_bottom">
                        <figure className="mb-0">
                            <img src="images/team_member_5.jpg" alt="" />
                        </figure>
                        <div className="member_name_span_wrapper">
                            <span>Zenith Jark</span>
                            <p>Pro-Player</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="team_content padding_bottom">
                        <figure className="mb-0">
                            <img src="images/team_member_6.jpg" alt="" />
                        </figure>
                        <div className="member_name_span_wrapper">
                            <span>Jason Compile</span>
                            <p>Pro-Player</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="subscribe_section">
        <div className="container">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                    <figure className="robot mb-0">
                        <img src="./images/subscribe_image.png" alt="" />
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
    </Layout>
  )
}
