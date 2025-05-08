import { footerList } from '@/data'
import { logo } from '@/data/assets/tech'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='w-full flex items-center flex-col md:gap-7 gap-4 bg-secondary/50'>
            <Image width={0}  height={0}  src={logo.src} className="w-15 h-15 object-cover object-center mt-5" alt="logo"/>
            <div className="flex items-center md:gap-8 gap-4">
                {
                    footerList.map((data, index) => (
                        <div key={index} className="cursor-pointer hover:-translate-y-5 transition-all duration-700">
                            <a target="_blank" href={data.link}>
                                <Image width={0}  height={0}  src={data.icon.src} alt={data.title} className="md:size-10 size-8"/>
                            </a>
                        </div>
                    ))
                }
            </div>
            <p className="font-regular md:text-lg text-sm">2025 &#169; All right reserved.</p>

        </footer>
    )
}

export default Footer