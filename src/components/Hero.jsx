import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

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
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
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
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors z-20 hidden md:flex"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-gray-500" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors z-20 hidden md:flex"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-gray-500" size={24} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
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
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
    </section>
  );
}

export default Hero;