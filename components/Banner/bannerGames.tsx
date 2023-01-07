import React from 'react'

export default function bannerGames() {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-lg-left text-center">
                        <div className="banner-section-content">
                            <h1 data-aos="fade-up">Our Games</h1>
                            <div className="btn_wrapper">
                                <span>Home <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i> Games</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12"></div>
                </div>
            </div>
        </section>
    )
}
