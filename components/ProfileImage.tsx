import React from 'react'
import profile from "../data/assets/laxmi.png"
import Image from 'next/image'

const ProfileImage = () => {
    return (
        <>
            <Image width={0} height={0} className="object-contain w-full h-full"  priority src={profile} alt="Laxmi"/>
        
        </>
    )
}

export default ProfileImage