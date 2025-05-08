import React from 'react'
import { aboutMeData } from "../data/index"
import AboutData from './AboutData';
import { getPath } from '@/global';


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
                    <a title="Download Resume"  target="_blank" rel="noopener noreferrer" className="btn btn-download">
                        Download
                    </a>
                </div>
            </div>
            <AboutData/>
        </div>
    )
}

export default AboutSection