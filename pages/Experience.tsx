"use client";
import React from 'react'
import { experiences } from '@/data';
import Image from 'next/image';

const Experience = () => {
    return (
      <section id="experience" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                My<span className="text-textLink">&nbsp;Experiences</span>
            </h2>
          <p className="text-secondary">
            This section highlights my work history.
          </p>


        <div className="relative">

            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
            
            {   experiences.map(({ id, title, companyName, icon, date, description}, index) => (
                <div
                    key={id}
                    className={`flex flex-col sm:flex-row items-center mb-16 ${
                    index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                    }`}
                >
                    {/* Timeline Circle */}
                    <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                    
                        <Image
                            width={40}
                            height={40}
                            src={icon}
                            alt={title}
                            className="w-full h-full object-cover rounded-full"
                            />
            
                    </div>

                    {/* Content Section */}
                    <div
                    className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                        index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                    } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
                    >
                    <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                        <Image
                            width={40}
                            height={40}
                            src={icon}
                            alt={title}
                            className="w-full h-full object-cover"
                            />


                        </div>

                        <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                            {title}
                            </h3>
                            <h4 className="text-md sm:text-sm text-gray-300">
                            {companyName}
                            </h4>
                        </div>
                        {/* Date at the bottom */}
                        <p className="text-sm text-gray-500 mt-2">{date}</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-400">{description}</p>
                    </div>
                </div>
            ))

            }
        </div>

            


        </div>
        </section>
        
    )
}

export default Experience


            {/* {experiences.map(({ id, title, companyName, icon, date, description }) => (
            <div key={id} className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo">
                    <Image
                    width={40}
                    height={40}
                    src={icon}
                    alt={title}
                    className="rounded-full w-full h-full object-contain"
                    />
                </div>
                <div className="work-content_bar" />
                </div>

                <div className="space-y-2 sm:space-y-3">
                <p className="font-bold text-white text-lg">{companyName}</p>
                <p className="text-sm text-gray-300">
                    {title} &mdash; {date}
                </p>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {description}
                </p>
                </div>
            </div>
            ))} */}