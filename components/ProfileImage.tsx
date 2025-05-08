import React from 'react'
import profile from "../data/assets/head_shoot.jpg"
import Image from 'next/image'

const ProfileImage = () => {
    return (
        <>
            <Image width={0}  height={0}  className="rounded-full w-full h-auto" src={profile} alt="Laxmi"/>
        </>
    )
}

export default ProfileImage