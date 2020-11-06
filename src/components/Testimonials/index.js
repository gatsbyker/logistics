import React from 'react';
import './testimonial.css';

export default function Testimonial() {
    return (
        <div>
            <section className="testimonials">
                <div className="container">
                    <div className="testimonial">
                        <div className="testimonial-test-box">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <i className="icon ion-md-quoate"></i>
                        </div>
                        <div className="testimonial-customer">
                            <img src="images/profile-pic.jpg" alt="customer"/>
                            <h1>Martin G.</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}