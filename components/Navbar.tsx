
"use client"
import React, { useEffect, useState } from 'react'
import {  cn } from "../data/utils"
import { X, Menu } from 'lucide-react'
import { logo } from '@/data/assets/tech'
import Image from 'next/image'


const navItems = [
    {name: "Home", href:"#hero"},
    {name: "About", href:"#about"},
    {name: "Education", href:"#education"},
    {name: "Skills", href:"#skills"},
    {name: "Project", href:"#project"},
    {name: "Experience", href:"#experience"},
    {name: "Contact", href:"#contact"},
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isMenuOpen, SetIsMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-surface backdrop:backdrop-blur-md" : "py-5")}>
            <div className="container flex items-center justify-between">
                
                <div className='flex items-center gap-3'>
                    <a href='' className="text-xl font-bold text-warm-white flex items-center">
                        <Image width={0}  height={0} alt="Logo" className='w-5 h-5 object-cover object-center' src={logo.src}/>&nbsp;
                        <span className='relative z-10'>
                            <span>Laxmi</span>&nbsp;Timsina
                        </span>
                    </a>
                </div>


                {/*  */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="nav-text transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                <button aria-label={isMenuOpen ? "Close Menu" : "Open menu"} className='md:hidden p-2 text-metallic-blue z-50' onClick={() => SetIsMenuOpen((prev) => !prev)}>{isMenuOpen ? <X size={24}/> : <Menu size={24}/>}</button>

                {/*  */}
                <div className={cn("fixed inset-0 shadow-surface backdrop-blur-md z-40 flex flex-col items-center justify-center", 
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}>

                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, index) => (
                            <a 
                                onClick={() => SetIsMenuOpen(false)}
                                key={index} href={item.href} className="text-highlight hover:text-nav-hover-red transition-colors duration-300">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar