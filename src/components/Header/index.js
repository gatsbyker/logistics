import React from 'react'
import './header.css'

export default function Header() {
    return (
        <main>
            <div className="header">
            <section className="hero">
                <div className="main-message">
                    <h3>The great outdoor</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                    </p>
                    <div className="cta">
                        <a href="/" className="btn">Book Now</a>
                    </div>
                </div>
            </section>
        </div>
    </main>
    )
}