import React from 'react'
import './adventure.css'

export default function Adventure() {
    return (
        <div>
            <section className="begin-adventure">
                <div className="container">
                    <div className="title-heading">
                        <h3>Adventrue</h3>
                        <h1>Adventure awaits whence you dare to forgo the comfort</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                            content here', making it look like readable English.</p>
                    </div>
                    <div className="adventure-grid">
                        <div className="adventure-grid-item">
                            <p>
                            It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                            content here', making it look like readable English.
                            </p>
                        </div>
                        <div className="adventure-grid-item">
                            <p>
                            It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that 
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                            content here', making it look like readable English.
                            </p>
                        </div>
                    </div>
                    <a class="btn" href="/"> Book Your Order</a>
                </div>
            </section>
        </div>
    )
}