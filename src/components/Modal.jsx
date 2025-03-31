import { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Modal({ images, title, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop (not the image or controls)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={handleBackdropClick}>
      <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={handleBackdropClick}>
        {/* Close button - Updated styling for better visibility */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>

        {/* Title */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-gray-300 text-center">
            {currentImageIndex + 1} / {images.length}
          </p>
        </div>

        {/* Main image container - Stops event propagation */}
        <div 
          className="relative w-full h-full flex items-center justify-center p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnail strip - Stops event propagation */}
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex space-x-2 overflow-x-auto p-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden ${
                  index === currentImageIndex ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Define PropTypes for the component
// Modal.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   title: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

export default Modal;