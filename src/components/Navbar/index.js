import React, {useState} from 'react';
import './navbar.css'

export default function Navbar() {
    const [active, setActive] =  useState(false)
    return (
        <div className="navbar-wrapper">
            <header>
                <div className="navbar-container">
                    <nav>
                        <div className="nav-brand">
                            <a href="/">
                                <img src="/images/logo.png" alt="logo"></img>
                            </a>
                        </div>
                        <div className="menu-icons open" onClick={(prevState) => setActive(true) }>
                            <i class="icon ion-md-menu"></i>
                        </div>
                        <ul className={`nav-list ${active? "active" : ""}`}>
                            <div className="menu-icons close" onClick={(prevState) => setActive(false) }>
                                <i class="icon ion-md-close"></i>
                            </div>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Booking
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Cotanct
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
