"use client";
import React, { useRef, useEffect, useState } from "react";

interface HeroVideoBackgroundProps {
  videoSrc: string;
}

const videoSources = ["/videos/hero-vid-1.mp4", "/videos/hero-vid-2.mp4"];

const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({
  videoSrc,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set the current source.
    video.src = videoSources[currentVideoIndex];

    // Try playing the video.
    video.muted = true; // required for browser-allowed autoplay
    video.play().catch((err) => {
      console.error("Autoplay might be disabled by the browser:", err);
    });

    // When the video ends, move on to the next one.
    const handleEnded = () => {
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videoSources.length; // loop back to 0
        return nextIndex;
      });
    };

    video.addEventListener("ended", handleEnded);

    // Cleanup
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentVideoIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoSrc}
        playsInline
        muted
      />
      <div
        // className="absolute inset-0 bg-gradient-to-b from-transparent to-00000E opacity-90"
        className="absolute inset-0 bg-red-600/10 blur-[100px] bg-opacity-50"
        // Tinted overlay: adjust bg-opacity or color as needed
      />
    </div>
  );
};

export default HeroVideoBackground;
