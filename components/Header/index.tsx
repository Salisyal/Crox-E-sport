import React from 'react'
import Link from 'next/link'

export default function Header() {
return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="./index.html">
                        <figure className="mb-0">
                            <img src="images/crox_logo.png" alt="" />
                        </figure>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href='/' legacyBehavior>
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/about' legacyBehavior>
                                    <a className="nav-link">About</a>
                                </Link>  
                            </li>
                            <li className="nav-item">
                                <Link href='/games' legacyBehavior>
                                    <a className="nav-link">Games</a>
                                </Link>                            
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./gallery.html">Gallery</a>
                            </li>
                            <li className="m-0">
                                <a className="navbar-brand" href="./index.html">
                                    <figure className="mb-0">
                                        <img src="images/crox_logo.png" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./match_detail.html">Detail</a>
                            </li>
                            <li className="nav-item mr-0">
                                <a className="nav-link" href="./contact.html">Contact</a>
                            </li>
                            <li className="nav-item mr-1 ml-0">
                                <a className="nav-link login_btn" href="./login.html">Log in</a>
                            </li>
                            <li className="nav-item ml-0">
                                <a className="nav-link signup_btn" href="./signup.html">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
