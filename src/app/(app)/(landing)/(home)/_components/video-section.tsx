"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoSectionProps {
  videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const gradientContainerEl = videoContainerRef.current;

    if (containerEl && gradientContainerEl) {
      gsap.fromTo(
        gradientContainerEl,
        { scale: 1 },
        {
          scale: 1.3,
          scrollTrigger: {
            trigger: containerEl,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    }
  }, []);

  const handleVideoClick = () => {
    const videoEl = videoRef.current;
    if (videoEl && videoEl.paused) {
      videoEl.muted = false;
      videoEl.play().catch(console.error);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 flex flex-col items-center "
    >
      {/* <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
        Discover more
      </h2> */}
      <div className="w-full md:w-2/3 lg:w-1/2 px-4">
        <div className="relative">
          {/* Attach a ref to the gradient container, NOT the video */}
          <div
            ref={videoContainerRef}
            className="relative rounded-lg p-1 bg-gradient-to-r from-red-500/10 to-red-600/50 w-full h-full"
          >
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-auto cursor-pointer rounded-lg bg-white"
              loop
              muted
              playsInline
              autoPlay
              onClick={handleVideoClick}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-80 transition-opacity pointer-events-none">
            {/* Some overlay icon or text that indicates "Click to enable audio" */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
