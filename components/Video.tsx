"use client"
import React, {useRef, useEffect, useState } from 'react'

const Video = ({videoSrc, videoName} : {videoSrc?:string, videoName?:string}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkIfMobile(); // Check on mount
        window.addEventListener("resize", checkIfMobile); 

        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);



    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [videoSrc]);


    return (
        <div className="flex flex-col justify-center items-center">
            {
                videoSrc ? (
                    // <video ref={videoRef} muted  key={videoSrc} loop autoPlay controls className="w-[90%] rounded-xl" >
                    <video ref={videoRef} muted  key={videoSrc} loop autoPlay controls 
                        // className="w-full h-auto max-w-[90%] max-h-[70vh] rounded-xl" 
                        className={`w-full h-auto ${isMobile ? '' : 'max-w-[90%] max-h-[70vh]'} rounded-xl`}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p className="text-gray-500">No video available {videoName}</p>
                )
            }
        </div>
    )
}

export default Video