"use client";
import React from 'react'
import { AboutSection } from './../components/index';



const About = () => {
    
    return (
        <section id="about" className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className="3xl md:text-4xl font-bold mb-12 text-center text-highlight">
                    About<span className='text-textLink'>&nbsp;Me</span>
                </h2>
                <AboutSection/>
            </div>
        </section>
    )
}

export default About