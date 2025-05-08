"use clinet"
import React, { useEffect, useRef } from "react";
import gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const SmallAnimatedText = ({text, textTrigger}:{text?:string, textTrigger?:string}) => {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const element = textRef.current;
  
      if (element) {
        gsap.fromTo(
          element,
          {
            opacity: 0, // Initially invisible
            x: "-100%", // Start offscreen to the left
          },
          {
            opacity: 1, // Fade in to full opacity
            x: "0%", // Slide to the original position
            duration: 1.5, // Duration of the animation
            ease: "power3.out", // Easing for smoothness
            scrollTrigger: {
              trigger: element,
              start: "top 90%", // Trigger when the top of the element enters 90% of the viewport
              end: "bottom 10%", // Keep animation active until the element leaves 10% of the viewport
              toggleActions: "play reverse play reverse", // Reverse when leaving the viewport
              onEnter: () => {
                // When the element enters from the top or bottom, slide in from the left
                gsap.to(element, { x: "0%", opacity: 1 });
              },
              onLeave: () => {
                // When the element leaves to the left (scrolling down)
                gsap.to(element, { x: "-100%", opacity: 0 });
              },
              onEnterBack: () => {
                gsap.to(element, { x: "0%", opacity: 1 });
              },
              onLeaveBack: () => {
                gsap.to(element, { x: "-100%", opacity: 0 });
              },
            },
          }
        );
      }
    }, [text]);
  
  

    return (
        <p ref={textRef} className={`mb-10 text-center max-w-xl mx-auto ${textTrigger}`}>
            {text}
        </p>
    )
}

export default SmallAnimatedText