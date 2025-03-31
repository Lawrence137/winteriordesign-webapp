import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data';

const categories = [
  {
    id: 1,
    title: 'Kitchen Cabinets',
    image: portfolioItems.find(item => item.category === 'Solid Wood')?.imageUrl || '/images/categories/kitchen.webp',
    description: 'Custom kitchen solutions for your home',
    styles: ['Mela Edge', 'Solid Wood', 'Spray Paint', 'Vac Press']
  },
  {
    id: 2,
    title: 'Bathroom Vanities',
    image: portfolioItems.find(item => item.category === 'Bathroom Vanities')?.imageUrl || '/images/categories/bathroom.webp',
    description: 'Storage spaces are critical in any bathroom design',
    styles: ['Undermount', 'Vessel', 'Wall-Mounted', 'Freestanding']
  },
  {
    id: 3,
    title: 'Closets & Wardrobes',
    image: portfolioItems.find(item => item.category === 'Closets & Wardrobes')?.imageUrl || '/images/categories/wardrobe.webp',
    description: 'Maximize your storage space with style',
    styles: ['Walk-in', 'Built-in', 'Sliding', 'Corner Units']
  }
];

function Portfolio() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const getCategoryUrl = (title) => {
    return title.toLowerCase().replace(/\s*&\s*/g, '-and-').replace(/\s+/g, '-');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-dancing font-bold text-gray-800 mb-4">
            Our Work
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our diverse portfolio of custom interior solutions
          </p>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Card */}
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex flex-col">
                  {/* Title and Description - At Bottom for Mobile, Center for Desktop */}
                  <div className="mt-auto p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-90 mb-6">{category.description}</p>
                    
                    {/* Permanent Discover More Button */}
                    <Link
                      to={`/portfolio/category/${getCategoryUrl(category.title)}`}
                      className="inline-block w-full md:w-auto text-center bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
