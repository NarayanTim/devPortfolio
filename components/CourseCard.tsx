"use client"
import { useRef, useEffect, useState } from 'react';
import React from 'react'
import gsap from 'gsap';


interface Course {
    title: string;
    description: string;
}
  
interface Props {
    course: Course;
    expandedCourse: string | null;
    toggleCourseDescription: (title: string) => void;
}

const CourseCard :  React.FC<Props> = ({course, expandedCourse, toggleCourseDescription  }) => {
    const descRef = useRef<HTMLParagraphElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = descRef.current;

    if (expandedCourse === course.title) {
      setShouldRender(true); // Mount element first
    } else if (shouldRender) {
      // Animate out then unmount
      gsap.to(el, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        rotation: 3,
        duration: 0.5,
        ease: 'power3.in',
        onComplete: () => setShouldRender(false),
      });
    }
  }, [expandedCourse, course.title, shouldRender]);

  useEffect(() => {
    const el = descRef.current;

    if (expandedCourse === course.title && el) {
      // Animate in only after element is mounted
      gsap.fromTo(
        el,
        { opacity: 0, y: 30, scale: 0.9, rotation: -3 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [shouldRender, expandedCourse, course.title]);

  return (
    <div
      className={`border border-primary rounded-lg p-4 cursor-pointer transition-all duration-200 hover:bg-soft-teal-dark hover:border-primary ${
        expandedCourse === course.title ? 'col-span-full' : ''
      }`}
      onClick={() => toggleCourseDescription(course.title)}
    >
      <h5 className="font-medium text-rock-200">{course.title}</h5>
      {shouldRender && (
        <p ref={descRef} className="mt-2 text-rock-200 text-sm">
          {course.description}
        </p>
      )}
    </div>
  );
};


export default CourseCard