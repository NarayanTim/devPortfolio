import React from 'react'
import { aboutMeData } from "../data/index"
import AboutData from './AboutData';

const AboutSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'> 
                <h3 className='sub-heading'>passionate developer </h3>
                <p className="text-secondary">
                    {aboutMeData}
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center '>
                    <a href="#contact" className="btn btn-contact">
                        Contact
                    </a>
                    <a target='_' href="Download" className="btn btn-download">
                        Download
                    </a>
                </div>
            </div>
            <AboutData/>
        </div>
    )
}

export default AboutSection