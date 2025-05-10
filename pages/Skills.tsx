"use client";

import React, { useState } from 'react'
import { cn } from "../data/utils"
import { FilterCards } from '@/components'
import AnimatedTitle from './../components/animation/AnimatedTitle';


const Skills = () => {

    const allTypes = ["All", "Languages", "Framework", "Database", "Tools"]
    const [activateSection, setActivateSection] = useState<string>(allTypes[0])
    return (
        <section id="skills" className='py-24 relative'>
            <div className='container mx-auto max-w-5xl'>
                <AnimatedTitle targetClassName={"skillText"} smallTitle={"My"} title={"Skills"}/>
                <div className="flex flex-wrap justify-center gap-4 mb-12 mt-12">
                    {
                    allTypes.map((data, index) => (
                        <button
                            onClick={() => setActivateSection(data)}
                            key={index} className={cn(
                                "transition-all duration-300 capitalize backdrop-blur-sm btn",
                                
                                activateSection === data
                                ? "btn-skill.active"
                                : "btn-skill"

                            )}>{data}</button>                
                    ))

                    }
                </div>

                {/* <div  className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 xl:gap-10 md:gap-8 gap-5 mt-16">
                    <FilterCards type={activateSection}/>
                </div> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mt-16">
                    <FilterCards type={activateSection} />
                </div>

            </div>
        </section>
    )
}

export default Skills