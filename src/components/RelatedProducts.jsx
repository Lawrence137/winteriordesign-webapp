import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioItems } from '../data';

const categories = [
  {
    id: 1,
    title: 'Kitchen Cabinets',
    image: portfolioItems.find(item => item.category === 'Solid Wood')?.imageUrl || '/images/categories/kitchen.webp',
    description: 'Custom kitchen solutions for your home'
  },
  {
    id: 2,
    title: 'Bathroom Vanities',
    image: portfolioItems.find(item => item.category === 'Bathroom Vanities')?.imageUrl || '/images/categories/bathroom.webp',
    description: 'Storage spaces are critical in any bathroom design'
  },
  {
    id: 3,
    title: 'Closets & Wardrobes',
    image: portfolioItems.find(item => item.category === 'Closets & Wardrobes')?.imageUrl || '/images/categories/wardrobe.webp',
    description: 'Maximize your storage space with style'
  },
  {
    id: 4,
    title: 'TV Units',
    image: portfolioItems.find(item => item.category === 'TV Units')?.imageUrl || '/images/categories/tv-units.webp',
    description: 'Modern entertainment units that combine style and functionality'
  }
];

function RelatedProducts({ currentCategory }) {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Filter out the current category and get other categories
  const relatedCategories = categories.filter(
    category => category.title.toLowerCase() !== currentCategory.toLowerCase()
  );

  const getCategoryUrl = (title) => {
    return title.toLowerCase().replace(/\s*&\s*/g, '-and-').replace(/\s+/g, '-');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Products</h2>
        
        {/* Related Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedCategories.map((category) => (
            <div key={category.id} className="relative">
              {/* Category Card */}
              <div className="relative h-[300px] overflow-hidden rounded-lg">
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
                  {/* Title and Description */}
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

export default RelatedProducts; 