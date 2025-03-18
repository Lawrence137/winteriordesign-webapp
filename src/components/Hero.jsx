import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Transform Your Space",
    subtitle: "Expert interior design services for your home or office",
  },
  {
    image: "/images/slide2.jpg",
    title: "Modern Kitchens",
    subtitle: "Modern designs for a functional and stylish kitchen",
  },
  {
    image: "/images/slide3.jpg",
    title: "Elegant Spaces",
    subtitle: "Timeless designs for your living room",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    console.log("Current Slide:", currentSlide);
  }, [currentSlide]);

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
    preventDefaultTouchmoveEvent: true, // Prevents unwanted scrolling
    trackMouse: false, // Optional: disable mouse tracking if not needed
  });

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center scroll-mt-20 pt-20"
      {...handlers}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-gray-200 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="lazy"
            // onError={(e) => console.error(`Failed to load image: ${slide.image}`)}
            // onLoad={(e) => console.log(`Loaded image: ${slide.image}`)}
          />
          <div className="absolute inset-0 bg-opacity-40 transition-opacity duration-300" />
        </div>
      ))}

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

      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {slides[currentSlide].title}
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          {slides[currentSlide].subtitle}
        </p>
        <a
          href="#contact"
          className="bg-teal-300 hover:bg-teal-400 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 "
        >
          GET A FREE QUOTATION
        </a>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;