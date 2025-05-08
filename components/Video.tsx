"use client"
import React, {useRef, useEffect } from 'react'

const Video = ({videoSrc, videoName} : {videoSrc?:string, videoName?:string}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [videoSrc]);


    return (
        <div className="flex flex-col justify-center items-center">
            {
                videoSrc ? (
                    <video ref={videoRef} muted  key={videoSrc} loop autoPlay controls className="w-[90%] rounded-xl" >
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