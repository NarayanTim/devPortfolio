import React from 'react'
import ProfileImage from './ProfileImage'

const AboutData = () => {
    return (
        <div className="grid grid-cols-1 gap-6">
            <div className='gradient-border p-6 card-hover'>
                <ProfileImage/>
            </div>
        </div>
    )
}


export default AboutData