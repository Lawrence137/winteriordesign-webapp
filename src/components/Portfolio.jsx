import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data';
import ScrollReveal from './ScrollReveal';
import { FaRegLightbulb, FaCircle } from 'react-icons/fa';

// Memoize the category card to prevent unnecessary re-renders
const CategoryCard = memo(({ category, getCategoryUrl, onMouseEnter, onMouseLeave }) => (
  <ScrollReveal delay={0.2}>
    <div 
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 z-20 flex flex-col">
          <div className="mt-auto p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
            <p className="text-sm opacity-90 mb-6">{category.description}</p>
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
  </ScrollReveal>
));

const categories = [
  {
    id: 1,
    title: 'Kitchen Cabinets',
    image: portfolioItems.find(item => item.category === 'Solid Wood')?.imageUrl || '/images/categories/kitchen.webp',
    description: 'Custom kitchen solutions for your home',
    styles: ['Mela Edge', 'Solid Wood', 'Spray Paint', 'PVC Wrap and High Gloss']
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
  },
  {
    id: 4,
    title: 'TV Units',
    image: portfolioItems.find(item => item.category === 'TV Units')?.imageUrl || '/images/categories/tv-units.webp',
    description: 'Modern entertainment units that combine style and functionality'
  }
];

function Portfolio() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const getCategoryUrl = (title) => {
    return title.toLowerCase().replace(/\s*&\s*/g, '-and-').replace(/\s+/g, '-');
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Section-wide Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Blurred Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-red-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-red-500/[0.05] rounded-full blur-3xl"></div>
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-12 left-12 w-3 h-3 bg-red-500/25 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/4 right-24 w-4 h-4 bg-red-500/20 rounded-full animate-float-slower"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-red-500/25 rounded-full animate-float-medium"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-red-500/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-24 right-1/4 w-4 h-4 bg-red-500/25 rounded-full animate-float-slower"></div>
        
        {/* Enhanced Pulsing Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-red-500/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-500/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-red-500/40 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-red-500/30 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-red-500/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-24 w-1.5 h-1.5 bg-red-500/30 rounded-full animate-pulse delay-[450ms]"></div>
        <div className="absolute bottom-1/4 left-32 w-1.5 h-1.5 bg-red-500/30 rounded-full animate-pulse delay-[600ms]"></div>
        <div className="absolute top-3/4 right-1/2 w-1.5 h-1.5 bg-red-500/30 rounded-full animate-pulse delay-[250ms]"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-32 left-0 w-32 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-40 h-px bg-gradient-to-l from-red-500/40 to-transparent"></div>
        <div className="absolute bottom-48 left-12 w-24 h-px bg-gradient-to-r from-red-500/40 to-transparent"></div>
        
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-red-500/20 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-red-500/20 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-red-500/20 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-red-500/20 rounded-br-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16 relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/5 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -right-12 w-32 h-32 bg-red-500/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-red-500/5 rounded-full blur-lg"></div>
            </div>

            {/* Floating Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <FaCircle className="absolute top-8 left-1/4 text-red-500/20 text-xs animate-float-slow" />
              <FaCircle className="absolute bottom-4 right-1/3 text-red-500/30 text-[8px] animate-float-slower" />
              <FaCircle className="absolute top-1/2 right-1/4 text-red-500/20 text-[10px] animate-float-medium" />
            </div>

            {/* Main Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-full animate-spin-slow"></div>
                <FaRegLightbulb className="text-2xl text-red-500 relative z-10" />
              </div>
            </div>
            
            {/* Small Subtitle with decorative side lines */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/30"></div>
              <p className="text-red-500 font-medium tracking-wider uppercase text-lg">
                Our Portfolio
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/30"></div>
            </div>


            {/* Description with enhanced decoration */}
            <div className="relative">
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                <span className="relative inline-block px-2">
                  Explore our diverse portfolio of custom interior solutions
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-red-500/30"></div>
                </span>
              </p>
              {/* Corner Accents */}
              <div className="absolute -left-4 -top-4 w-8 h-8 border-l-2 border-t-2 border-red-500/20 rounded-tl-lg"></div>
              <div className="absolute -right-4 -bottom-4 w-8 h-8 border-r-2 border-b-2 border-red-500/20 rounded-br-lg"></div>
            </div>

            {/* Enhanced Decorative Lines */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1">
              <div className="w-1 h-1 bg-red-500/40 rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-r from-red-500/30 to-red-500/10"></div>
              <div className="w-2 h-2 bg-red-500/30 rounded-full"></div>
              <div className="w-1 h-1 bg-red-500/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              getCategoryUrl={getCategoryUrl}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Portfolio);
