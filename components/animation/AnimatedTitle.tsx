"use client";
import React from 'react'
import gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);
const AnimatedTitle = ({smallTitle="My", title="Skills", targetClassName="text-textLink"}:{smallTitle:string, title?:string,  targetClassName?:string}) => {
    useGSAP(() => {
        const target = `.${targetClassName}`;
      
        gsap.set(target, { y: 200, opacity: 0 }); // Set initial state once
      
        ScrollTrigger.create({
          trigger: target,
          start: "bottom center",
          onEnter: () => {
            gsap.to(target, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(target, {
              y: 200,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            });
          }
        });
      });

    
    return (
        <h2 className='text-3xl md:text-4xl font-bold text-center'>
            {smallTitle}<span className={`text-textLink ${targetClassName}`}>&nbsp;{title}</span>
        </h2>
    )
}

export default AnimatedTitle