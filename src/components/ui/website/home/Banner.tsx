"use client";
import { useRef } from "react";
import FilterOptions from "./FilterOptions";

const Banner = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="flex items-center justify-center relative">
            <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden">
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://res.cloudinary.com/ds1njqypu/video/upload/v1763529216/MicrosoftTeams-video_brgm6w.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="absolute lg:-bottom-14 -bottom-16 z-20">
                <FilterOptions />
            </div>
        </div>
    );
};

export default Banner;
