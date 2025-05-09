import React from 'react'
import { aboutMeData, uniqueAbout } from "../data/index"
import AboutData from './AboutData';
import { getPath } from '@/global';


const AboutSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'> 
                <h3 className='sub-heading'>Passionate Developer</h3>
                <p className="text-secondary">
                    {aboutMeData}
                </p>

                <h3 className='sub-heading'>Unique About Me</h3>
                <p className="text-secondary">
                    {uniqueAbout}
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center '>
                    <a href="#contact" className="btn btn-contact">
                        Contact
                    </a>
                    <a title="Download Resume" href={`${getPath()}/Resume.pdf`}  target="_blank" rel="noopener noreferrer" className="btn btn-download">
                        Download
                    </a>
                </div>
            </div>
            <AboutData/>
        </div>
    )
}

export default AboutSection