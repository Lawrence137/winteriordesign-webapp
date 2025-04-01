import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navigation from "./Navigation";
import ScrollReveal from "./ScrollReveal";

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

  return (
    <>
      <Navigation />
      
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden pt-[70px]"
        {...handlers}
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
              {/* Image Container */}
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover blur-[1px] md:blur-none"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] md:bg-black/40 md:backdrop-blur-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <ScrollReveal delay={0.2}>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors z-20 hidden md:flex"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-gray-500" size={24} />
          </button>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors z-20 hidden md:flex"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-gray-500" size={24} />
          </button>
        </ScrollReveal>

        {/* Desktop Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 hidden md:flex">
          <ScrollReveal delay={0.3}>
            <div className="text-center text-white px-4">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slides[currentSlide].title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
              <a
                href="#contact"
                className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
              >
                ENQUIRE
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 md:hidden px-4">
          <div className="w-full flex flex-col items-center">
            <div className="bg-white/95 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 w-full backdrop-blur-sm relative before:absolute before:inset-0 before:border-2 before:border-white/10 before:rounded-2xl before:-m-[2px]">
              <ScrollReveal delay={0.4}>
                <div className="aspect-square relative">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Text Overlay on Image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
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
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-medium px-4 h-8 rounded-lg shadow-lg transition-all duration-300 ring-1 ring-white/20 relative z-10"
              >
                ENQUIRE
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* Dots Navigation */}
        <ScrollReveal delay={0.5}>
          <div className="absolute bottom-12 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Persistent Mobile Contact Bar */}
      <ScrollReveal delay={0.6}>
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
            <a
              href="tel:+254728846560"
              className="flex flex-col items-center text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              <FaPhone className="text-xl mb-1" />
              <span className="text-xs font-medium">CALL US</span>
            </a>
            <a
              href="#contact"
              className="flex flex-col items-center text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              <FaEnvelope className="text-xl mb-1" />
              <span className="text-xs font-medium">ENQUIRE</span>
            </a>
            <a
              href="#location"
              className="flex flex-col items-center text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              <FaMapMarkerAlt className="text-xl mb-1" />
              <span className="text-xs font-medium">CONTACT</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}

export default Hero;