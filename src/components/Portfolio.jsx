import { useState, useRef, useEffect } from 'react';
import { portfolioItems } from '../data';
import Modal from './Modal';
import { FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('All');
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeButtonPosition, setActiveButtonPosition] = useState({ left: 0, width: 0 });

  // Get unique categories directly from portfolioItems
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  // Filter items based on the selected category
  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  // Handle scroll arrows visibility
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isOverflowing = scrollWidth > clientWidth;
      setShowLeftArrow(isOverflowing && scrollLeft > 0);
      setShowRightArrow(isOverflowing && scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Update the position of the active button for the sliding effect
  const updateActiveButtonPosition = () => {
    const activeButton = document.querySelector('.filter-button.active');
    if (activeButton && scrollRef.current) {
      const { offsetLeft, offsetWidth } = activeButton;
      setActiveButtonPosition({ left: offsetLeft, width: offsetWidth });

      // Center the active button
      const containerWidth = scrollRef.current.clientWidth;
      const scrollPosition = offsetLeft - containerWidth / 2 + offsetWidth / 2;
      scrollRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  // Attach scroll and resize event listeners
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      handleScroll(); // Initial check
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    };
  }, []);

  // Update active button position on filter change or resize
  useEffect(() => {
    updateActiveButtonPosition();
    window.addEventListener('resize', updateActiveButtonPosition);
    return () => window.removeEventListener('resize', updateActiveButtonPosition);
  }, [filter]);

  // Scroll left/right
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-16 scroll-mt-16 bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex flex-col flex-1">
        <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-8 text-center text-gray-800">
          Our Work
        </h2>

        {/* Filter Bar */}
        <div className="relative flex justify-center mb-8">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-400 text-white p-2 rounded-full shadow-md hover:bg-red-500 transition z-10"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={20} />
            </button>
          )}

          {/* Filter Buttons */}
          <div
            ref={scrollRef}
            className="relative flex space-x-4 overflow-x-auto scrollbar-hide py-2"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-button px-6 py-3 rounded-3xl font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                  filter === category
                    ? 'bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md active'
                    : 'bg-white text-gray-600 border border-red-400 hover:bg-teal-100'
                }`}
              >
                {category}
              </button>
            ))}
            {/* Sliding Highlight (Bottom Line) */}
            <div
              className="absolute bottom-0 h-1 bg-red-400 transition-all duration-300 ease-in-out"
              style={{
                left: `${activeButtonPosition.left}px`,
                width: `${activeButtonPosition.width}px`,
              }}
            />
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-400 text-white p-2 rounded-full shadow-md hover:bg-red-500 transition z-10"
              aria-label="Scroll right"
            >
              <FaChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Image Grid */}
        <div className="relative flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full animate-fadeIn">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="relative rounded-3xl shadow-md overflow-hidden cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaEye className="text-white text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}

export default Portfolio;