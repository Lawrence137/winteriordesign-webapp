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
    title: 'Closets & Wardrobes',
    image: portfolioItems.find(item => item.category === 'Closets & Wardrobes')?.imageUrl || '/images/categories/wardrobe.webp',
    description: 'Maximize your storage space with style',
    styles: ['Walk-in', 'Built-in', 'Sliding', 'Corner Units']
  },
  {
    id: 3,
    title: 'Bathroom Vanities',
    image: portfolioItems.find(item => item.category === 'Bathroom Vanities')?.imageUrl || '/images/categories/bathroom.webp',
    description: 'Storage spaces are critical in any bathroom design',
    styles: ['Undermount', 'Vessel', 'Wall-Mounted', 'Freestanding']
  }
];

function RelatedProducts({ currentCategory }) {
  // Filter out the current category and get other categories
  const relatedCategories = categories.filter(
    category => category.title.toLowerCase() !== currentCategory.toLowerCase()
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Categories</h2>
        
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
                      to={`/portfolio/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
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