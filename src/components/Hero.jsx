import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight, FaPhone, FaEnvelope } from "react-icons/fa";
import { GiRotaryPhone, GiScrollQuill, GiSmartphone } from "react-icons/gi";
import { useSwipeable } from "react-swipeable";
import Navigation from "./Navigation";
import ScrollReveal from "./ScrollReveal";
import { useEnquiry } from '../context/EnquiryContext';
import EnquiryForm from './EnquiryForm';
import { Helmet } from 'react-helmet-async';
import useEnquiryModal from '../hooks/useEnquiryModal';

const slides = [
  {
    image: "/images/slide1.webp",
    title: "Transform Your Space",
    subtitle: "Expert interior design services for your home or office",
  },
  {
    image: "/images/slide2.webp",
    title: "Modern Kitchens",
    subtitle: "Modern designs for a functional and stylish kitchen",
  },
  {
    image: "/images/slide3.webp",
    title: "Elegant Spaces",
    subtitle: "Timeless designs for your living room",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openEnquiryForm } = useEnquiry();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  // Add structured data for the image slider
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    'name': 'Winterior Design Portfolio Slider',
    'description': 'Showcase of our best interior design projects',
    'image': slides.map(slide => ({
      '@type': 'ImageObject',
      'url': slide.image,
      'name': slide.title,
      'description': slide.subtitle
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden pt-[70px]"
        {...handlers}
        role="banner"
        aria-label="Featured Projects Showcase"
      >
        {/* Slides Container */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Image Container - Optimized for mobile */}
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "low"}
                  decoding="async"
                  width="1920"
                  height="1080"
                  aria-label={`${slide.title} - ${slide.subtitle}`}
                />
                {/* Dark Overlay - Using gradient instead of blur */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 md:from-black/40 md:via-black/30 md:to-black/40"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <ScrollReveal delay={0.2}>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors z-20 hidden md:flex"
            aria-label="View previous slide"
          >
            <FaArrowLeft className="text-gray-500" size={24} aria-hidden="true" />
          </button>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors z-20 hidden md:flex"
            aria-label="View next slide"
          >
            <FaArrowRight className="text-gray-500" size={24} aria-hidden="true" />
          </button>
        </ScrollReveal>

        {/* Desktop Content */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center">
          <div className="text-center text-white relative z-10 px-4">
            <ScrollReveal delay={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                {slides[currentSlide].subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <button
                onClick={openEnquiryForm}
                className="mt-6 inline-flex items-center justify-center bg-red-500 hover:bg-red-700 text-white text-sm md:text-base font-medium px-4 md:px-8 h-8 md:h-12 rounded-lg shadow-lg transition-all duration-300 ring-1 ring-white/20 relative z-10 animate-pulse-glow hidden md:inline-flex"
                aria-label="Open enquiry form"
              >
                ENQUIRE
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile Card Overlay - Optimized without blur */}
        <div className="absolute inset-0 flex items-center justify-center z-20 md:hidden px-4">
          <div className="w-full flex flex-col items-center">
            <div className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 w-full relative">
              <ScrollReveal delay={0.4}>
                <div className="aspect-square relative">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden={index !== currentSlide}
                    >
                      <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          width="800"
                          height="800"
                        />
                      </div>
                      {/* Text Overlay on Image - Using gradient instead of blur */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end"
                        aria-hidden="true"
                      >
                        <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                          {slide.title}
                        </h2>
                        <p className="text-white/90 text-sm drop-shadow">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Mobile Enquire Button */}
            <ScrollReveal delay={0.5}>
              <button
                onClick={openEnquiryForm}
                className="mt-6 inline-flex items-center justify-center bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-medium px-4 h-8 rounded-lg shadow-lg transition-all duration-300 ring-1 ring-white/20 relative z-10"
                aria-label="Open enquiry form"
              >
                ENQUIRE
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Dots Navigation */}
        <ScrollReveal delay={0.5}>
          <div 
            className="absolute bottom-12 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"
            role="navigation"
            aria-label="Slide navigation"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Persistent Mobile Contact Bar */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        role="complementary"
        aria-label="Quick contact options"
      >
        <div className="relative bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
          <div className="absolute -top-4 inset-x-0">
            <svg className="w-full h-4" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0,100 L47,100 Q50,20 53,100 L100,100 L100,100 L0,100 Z"
                fill="white"
              />
            </svg>
          </div>
          
          {/* Menu Content */}
          <div className="flex items-center justify-between px-6 py-2">
            <a 
              href="tel:+254728846560" 
              className="flex flex-col items-center"
              aria-label="Call us"
            >
              <GiRotaryPhone className="text-blue-500 text-2xl mb-1" aria-hidden="true" />
              <span className="text-red-500 text-[13px] font-medium">CALL US</span>
            </a>
            <button
              onClick={openEnquiryForm}
              className="flex flex-col items-center -mt-7 bg-white rounded-full p-3 relative"
              style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
              }}
              aria-label="Open enquiry form"
            >
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-12 h-12 rounded-full bg-red-500/20 animate-pulse" />
              </div>
              <GiScrollQuill className="text-red-500 text-2xl mb-1 relative z-10" aria-hidden="true" />
              <span className="text-red-500 text-[13px] font-medium relative z-10">ENQUIRE</span>
            </button>
            <a 
              href="https://wa.me/+254728846560" 
              className="flex flex-col items-center"
              aria-label="Contact us on WhatsApp"
            >
              <GiSmartphone className="text-green-500 text-2xl mb-1" aria-hidden="true" />
              <span className="text-red-500 text-[13px] font-medium">CONTACT</span>
            </a>
          </div>
        </div>
      </div>

      {/* Single Enquiry Form Instance */}
      <EnquiryForm />
    </>
  );
}

export default Hero;