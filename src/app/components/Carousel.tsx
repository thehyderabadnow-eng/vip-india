"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1920&q=80",
      title: "Volunteers for Ideal Politics",
      subtitle: "Bridging the Gap Between Public Problems and Policy Solutions.",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
      title: "Zero Pomp, Pure Policy",
      subtitle: "No flexis, no garlands — just data-driven grassroots governance.",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
      title: "Digital-First Architecture",
      subtitle: "Mapping grassroots grievances methodically across every tier of society.",
    },
    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80",
      title: "Be the Change",
      subtitle: "Report, discuss, and track local issues through to official resolution.",
    },
  ];

  // Auto-play feature: rotates every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden bg-vip-blue">
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(4, 30, 66, 0.65), rgba(4, 30, 66, 0.75)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight uppercase animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="/report"
                  className="inline-block bg-vip-saffron hover:bg-vip-saffron/90 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Report an Issue
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors hidden md:block"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow Controls */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors hidden md:block"
      >
        <ChevronRight size={30} />
      </button>

      {/* Slide Navigation Dots Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-vip-saffron" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}