import React from 'react'

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="middle-portion">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <ul className="links mb-0 list-unstyled">
                                <li><a href="./index.html">Home</a></li>
                                <li><a href="./about.html">About</a></li>
                                <li><a href="./games.html">Games</a></li>
                                <li><a href="./gallery.html">Gallery</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <ul className="mb-2 list-unstyled">
                                <li><a href="./index.html"><figure className="mb-0"><img src="images/footer_logo.png" alt="" /></figure></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <ul className="mb-0 list-unstyled neg_margin">
                                <li className="links"><a href="./match_detail.html">Detail</a></li>
                                <li className="links"><a href="./contact.html">Contact</a></li>
                                <li className="icons"><a href="#"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li className="icons"><a href="#"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                                <li className="icons"><a href="#"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a></li>
                                <li className="icons"><a href="#"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-portion">
                <div className="copyright col-xl-12"> 
                    <p>Copyright 2021, Crox Esports. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
