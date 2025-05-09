"use client";
import React, { useState } from 'react'
import { githubLink, projects } from './../data/index';
import { rightArrow, leftArrow } from "../data/assets/others/index"
import Image from 'next/image';
import spotlight from "../data/assets/spotlight/spotlight4.png";
import { Video } from "../components/index"
import { ExternalLink, Github } from 'lucide-react';

const Project = () => {

    const projectCount:number = projects.length;
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    
    const project = projects[selectedProjectIndex];


    const handleNavigation = (direction:string) => {
        setSelectedProjectIndex((prevIndex:number) => {
        if (direction === 'previous') {
            return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
        } else {
            return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
        }
        });
    };



    return (

        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Featured
                    <span className="text-textLink">&nbsp;Projects</span>

                </h2>
                <p className="text-secondary">
                A selection of projects that reflect my journey as a developer — from building immersive game worlds in Unity to developing powerful backend systems with Python and Django. Each project showcases my ability to create engaging user experiences and write clean, maintainable code.
                </p>

                {/* Project copied past here */}

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <Image width={0}  height={0}  src={spotlight} alt="Spotlight" className="w-full h-96 object-cover rounded-xl"/>
                    </div>

                    
                    <div className="flex flex-col gap-5 text-white-600 my-5 p-3">
                        <p className="text-zinc-100 text-2xl font-semibold">{project.title}</p>
                        <p className="animatedText">{project.desc}</p>
                        <p className="animatedText">{project.sub_desc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {project.tags.map((tag, index) => (
                            <div key={index} className="w-10 h-10 rounded-md p-2 bg-neutral-500 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                                <Image width={0}  height={0}  src={tag.icon} alt={tag.name} />
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        {
                            project.demoLink != "" ? <a target="_blank" className={` ${project.demoLink === "" ? "disabled cursor-not-allowed" : "hover:text-metallic-orange"}`} href={project?.demoLink ?? ""}><ExternalLink/></a> : null
                        }
                        
                        {
                            project.githubLink != "" ? <a target="_blank" className={`${project.githubLink === "" ? "disabled cursor-not-allowed" : "hover:text-metallic-blue"}`} href={project?.githubLink ?? ""}><Github/></a> : null
                        }
                        
                        
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        {/* <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full " onClick={() => handleNavigation('previous')}> */}
                        <button className="w-14 h-14 p-3 cursor-pointer active:scale-95 transition-all bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg" onClick={() => handleNavigation('previous')}>
                            <Image width={0}  height={0}  className="w-6 h-6 text-white "  src={leftArrow.src} alt="left arrow" />
                        </button>

                        {/* <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full" onClick={() => handleNavigation('next')}> */}
                        <button className="w-14 h-14 p-3 cursor-pointer active:scale-95 transition-all bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg" onClick={() => handleNavigation('next')}>
                            <Image width={0}  height={0}  src={rightArrow.src} alt="right arrow" className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
                
                <div className=" h-95 flex justify-center items-center bg-gray-900 border border-fusion-white-secondary rounded-lg md:h-full">
                    <Video videoSrc={project.videoUrl} videoName={project.title} />
                </div>        
                    

                </div>
                {/* End here */}
                <div className="text-center mt-12">
                    <a target="_blank" href={githubLink} className="btn btn-github">
                        Check my github
                    </a>
                </div>    
                

            </div>
        </section>
    )
}

export default Project