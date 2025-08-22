"use client";
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '@/public/models';
import { Logo } from '@/components/3dlogo';




const Hero = () => {
    const isSmall:boolean = useMediaQuery({ maxWidth: 440 });
    const isMobile:boolean = useMediaQuery({ maxWidth: 768 });
    const isTablet:boolean = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    type LogoSizes = {
        react: [number, number, number];
        python: [number, number, number];
        node: [number, number, number];
        next: [number, number, number];
        unity: [number, number, number];
        [key: string]: [number, number, number];
    };
    const sizes: LogoSizes = calculateSizes({ isSmall, isMobile, isTablet }) as LogoSizes;



    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4" id="hero">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="text-textLink opacity-0 animate-fade-in">Hi, I&lsquo;m</span>
                        <span className="text-warm-white opacity-0 animate-fade-in-delay-1"> Laxmi</span>
                        <span className="text-soft-teal-dark ml-2 opacity-0 animate-fade-in-delay-2"> Timsina</span>
                    </h1>
                    <Logo sizes={sizes}/>
                    <p className='text-lg md:text-xl text-silver-glow-300 max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4'>
                        Junior Developer | Eager to learn, adaptable, and ready to contribute to any project.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 xs:hidden">
                        <a href="#about" className="btn btn-go-down">
                            Go Down
                        </a>
                    </div>
                </div>
            </div>


            
            <div className="hidden sm:flex absolute xs:bottom-10 bottom-32 w-full justify-center items-center">
                <a href="#about">
                    <div className="w-[3spx] h-[64px] rounded-3xl border-4 border-gold-glow-500 flex justify-center items-center p-2">
                        <div className='animate-bounce w-3 h-3 rounded-full bg-stone-500 mb-1'></div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero