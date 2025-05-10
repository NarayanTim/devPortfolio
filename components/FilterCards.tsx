"use client";
import React, { useEffect, useState }  from 'react'
import Database from './Database'
import Framework from './Framework'
import Language from './Language'
import Tools from './Tools'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);



type ComponentType = { type: string; Component: React.FC };
const allComponents : ComponentType[]  = [
    {type : "Database", Component:Database},
    {type : "Languages", Component:Language},
    {type : "Framework", Component:Framework},
    {type : "Tools", Component:Tools},
]


const FilterCards = ({type="All"}:{type?:string}) => {
    const [displayedComponents, setDisplayedComponents] = useState<ComponentType[]>(allComponents);
    useEffect(() => {
        const filtered =
          type === "All"
            ? allComponents
            : allComponents.filter((item) => item.type === type);
        setDisplayedComponents(filtered);
      }, [type]);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".tech-card") as HTMLElement[];

        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.95,
              x: -50,                          // ⬅️ Start from the left
              rotateZ: -2 + Math.random() * 4
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              rotateZ: 0,
              duration: 0.2,                  // Fast animation
              delay: i * 0.02,                // Quick stagger
              ease: "power1.out",             // Snappy easing
              scrollTrigger: {
                trigger: card,
                start: "top 95%",             // Trigger earlier
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });
        
        ScrollTrigger.refresh();


    }, [displayedComponents])



    return (
        <>

            {displayedComponents.map(({ Component, type }) => {
              try {
                return <Component key={type} />;
              } catch (error) {
                console.error(`Error rendering ${type}`, error);
                return <div key={type}>Error rendering {type}</div>;
              }
            })}

        </>
    )
}

export default FilterCards