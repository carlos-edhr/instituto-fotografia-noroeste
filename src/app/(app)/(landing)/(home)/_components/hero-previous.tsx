"use client";
import React, { useState, useEffect } from "react";
import "./hero-section.css";
// import Spline from "@splinetool/react-spline";
// If you want to use GSAP:
import gsap from "gsap";

// Define an array of background images
const images = [
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//1.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//2.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//3.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//6.jpg",

  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//11.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//12.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//13.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//14.jpg",

  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//16.jpg",
  // "/img/17.jpg",
  // "/img/18.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//19.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//20.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//21.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//22.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//23.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//24.jpg",
  "https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//33.jpg",
];

// Define an array of hero titles
const titles = [
  "From Engineering to Photography",
  "Astrophotography",
  "Portraits",
  "Pedagogy",
  "Nature",
  "Events",
  "Landscapes",
  "Architecture",
  "Marketing",
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150); // Typing speed in ms
  const [fade, setFade] = useState<boolean>(false); // Background fade

  // --- NEW: manage the visibility of Spline based on mouse position.
  const [showSpline, setShowSpline] = useState<boolean>(false);

  useEffect(() => {
    // Preload all background images to avoid flickering
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Change background image every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Fade in the new image
      }, 500); // Half-second for the fade-out before changing the image
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Typing and deleting logic for hero title
  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];
      if (!isDeleting) {
        // Typing phase
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        // Deleting phase
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  /**
   * NEW: Mouse move handler
   *
   * We define a radius around the center. If the mouse is within that radius,
   * we show the Spline. Otherwise, we hide it.
   */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Adjust radius as needed
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2),
      );

      if (distance < radius) {
        // Mouse is in center region
        setShowSpline(true);
      } else {
        setShowSpline(false);
      }
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /**
   * (Optional) Use GSAP for smoother transitions if desired
   * We'll watch showSpline in a useEffect and animate accordingly.
   */
  useEffect(() => {
    // Use GSAP to fade in/out the .spline-container
    gsap.to(".spline-container", {
      opacity: showSpline ? 1 : 0,
      duration: 1,
      ease: "power2.out",
    });
  }, [showSpline]);

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      {/* Background Image with Smooth Transition */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        {/* 
          Spline Container 
          We'll apply an absolute position in the center, 
          but it will remain at 0 opacity until 'showSpline' is true.
        */}
        <div
          className="spline-container absolute inset-0 flex items-center justify-center z-20"
          style={{ opacity: 0 }} // GSAP will handle transitions
        >
          {/* <Spline scene="https://prod.spline.design/F7YcvtNTK7u6Mhdf/scene.splinecode" /> */}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 z-10">
        {/* <h1 className="font-roboto text-white text-4xl font-bold">
          Caneck Leyva
        </h1> */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home"
              className="hidden text-white  text-lg hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hidden text-white text-lg hover:underline"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hidden text-white text-lg hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Title in Bottom-Left with Typewriter Effect */}
      {/* <div className="absolute bottom-8 left-8 z-10">
        <h1 className="text-white text-xl  sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-roboto font-extralight tracking-wider typewriter">
          {currentText}
        </h1>
      </div> */}

      {/* Overlay for better text readability - removed opacity-30 */}
      <div className="absolute inset-0   z-0"></div>
    </div>
  );
};

export default HeroSection;
