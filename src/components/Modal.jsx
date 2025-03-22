import { useState } from 'react';
// import PropTypes from 'prop-types';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Modal({ item, onClose }) {
  if (!item) return null; // Don't render if no item is selected

  // State to track the current image index within the imageFolder
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Navigation handlers for the image folder
  const handlePrev = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? item.imageFolder.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === item.imageFolder.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the current image from the imageFolder
  const currentImage = item.imageFolder[currentImageIndex];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-teal-400 text-white p-2 rounded-full hover:bg-teal-500 transition"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 hover:text-teal-300 transition"
          aria-label="Previous image"
        >
          <FaChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-400 hover:text-teal-300 transition"
          aria-label="Next image"
        >
          <FaChevronRight size={32} />
        </button>

        {/* Image */}
        <img
          src={currentImage}
          alt={`${item.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-auto max-h-[70vh] object-contain rounded-3xl shadow-lg"
        />

        {/* Caption and Counter */}
        <div className="text-center mt-4">
          <p className="text-lg md:text-xl font-dancing text-white">
            {item.title}
          </p>
          <p className="text-sm text-teal-400">
            {currentImageIndex + 1} of {item.imageFolder.length}
          </p>
        </div>
      </div>
    </div>
  );
}

// Define PropTypes for the component
// Modal.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     category: PropTypes.string,
//     imageFolder: PropTypes.arrayOf(PropTypes.string).isRequired, // Add PropTypes for imageFolder
//   }),
//   onClose: PropTypes.func.isRequired,
// };

export default Modal;