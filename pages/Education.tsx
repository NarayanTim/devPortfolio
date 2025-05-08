"use client";
import { education, educationData } from '@/data';
import React, { useState} from 'react'
import { CourseCard } from "../components/index"


const Education = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourseDescription = (title: string) => {
    setExpandedCourse(prev => (prev === title ? null : title));
  };

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My<span className="text-textLink">&nbsp;Education</span>
        </h2>
        <p className="mb-10 text-center max-w-xl mx-auto">
          Here&apos;s an overview of my academic background and relevant coursework.
        </p>

        <div className="space-y-10">
          {educationData.map((educationSchool, index) => (
            <div key={index} className="education-card p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">{educationSchool.school}</h2>
                  <h3 className="text-lg mt-1">{educationSchool.major}</h3>
                </div>
                <span className="inline-block bg-soft-teal-dark text-warm-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {educationSchool.date}
                </span>
              </div>

              {/* Courses */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-cool-white mb-3">
                  {educationSchool.courses}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {education.map(course => (
                    <CourseCard
                      key={course.title}
                      course={course}
                      expandedCourse={expandedCourse}
                      toggleCourseDescription={toggleCourseDescription}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 text-center text-rock-500 text-sm">
            <p>Click on any course to view more details</p>
          </div>
        </div>
      </div>
    </section>
  );
};







export default Education





           {/* {education.map((course) => (
                  <div
                    key={course.title}
                    className={`border border-primary rounded-lg p-4 cursor-pointer transition-all duration-200 hover:bg-primary hover:border-primary ${
                      expandedCourse === course.title ? "col-span-full" : ""
                    }`}
                    onClick={() => toggleCourseDescription(course.title)}
                  >
                    <h5 className="font-medium text-rock-200">{course.title}</h5>
                    {expandedCourse === course.title && (
                      <p className="mt-2 text-rock-200 text-sm">
                        {course.description}
                      </p>
                    )}
                  </div>
                ))} */}