import React from 'react';
import Header from '../../components/Header'
import Experience from '../../components/Experience';
import Testimonial from '../../components/Testimonials';
import Adventure from '../../components/Adventure';
import './home.css'


export default function Home() {
    return (
        <div>
            <Header/>
            <Experience/>
            <Testimonial/>
            <Adventure/>
        </div>
    )
}