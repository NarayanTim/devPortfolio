"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'



const SkillsCard = ({icon, title} : {icon : StaticImageData, title : string}) => {
    return (
        <div className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
            <div className='tech-card-animated-bg'/>
            <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                    <Image width={200} height={200}  src={icon} alt={title} className="object-contain w-full h-full"/>
                </div>
                <div className='px-5 md:px-10 w-full'>
                    <p className="">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard