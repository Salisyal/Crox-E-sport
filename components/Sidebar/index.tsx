import React from 'react'

export default function Sidebar() {
    return (
        <div className="left_icons float-left d-table" data-aos="fade-down">
            <div className="icon_content d-table-cell align-middle">
                <ul className="list-unstyled p-0 m-0">
                    <li>
                        <a href="#"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                    </li>
                    <li className="p-0">
                        <a href="#"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
