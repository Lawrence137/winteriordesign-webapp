import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import { FaArrowLeft, FaArrowRight, FaHome, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { portfolioItems } from '../data';
import RelatedProducts from '../components/RelatedProducts';

// This would come from your data file
const categoryData = {
  'kitchen-cabinets': {
    title: 'Kitchen Cabinets',
    description: 'Custom kitchen solutions for your home',
    styles: [
      {
        id: 1,
        name: 'Mela Edge',
        description: 'Modern and sleek kitchen designs with clean lines',
        image: portfolioItems.find(item => item.category === 'Mela Edge')?.imageUrl || '',
        gallery: portfolioItems.find(item => item.category === 'Mela Edge')?.imageFolder || []
      },
      {
        id: 2,
        name: 'Solid Wood',
        description: 'Traditional and timeless solid wood kitchens',
        image: portfolioItems.find(item => item.category === 'Solid Wood')?.imageUrl || '',
        gallery: portfolioItems.find(item => item.category === 'Solid Wood')?.imageFolder || []
      },
      {
        id: 3,
        name: 'Spray Paint',
        description: 'Custom colored cabinets for a unique look',
        image: portfolioItems.find(item => item.category === 'Spray Paint')?.imageUrl || '',
        gallery: portfolioItems.find(item => item.category === 'Spray Paint')?.imageFolder || []
      },
      {
        id: 4,
        name: 'PVC Wrap and High Gloss',
        description: 'Modern and sleek finishes with PVC wrap and high gloss surfaces',
        image: portfolioItems.find(item => item.category === 'PVC Wrap and High Gloss')?.imageUrl || '',
        gallery: portfolioItems.find(item => item.category === 'PVC Wrap and High Gloss')?.imageFolder || []
      }
    ]
  },
  'bathroom-vanities': {
    title: 'Bathroom Vanities',
    description: 'Storage spaces are critical in any bathroom design',
    styles: [
      {
        id: 1,
        name: 'Bathroom Vanities',
        description: 'Storage spaces are critical in any bathroom design',
        image: portfolioItems.find(item => item.category === 'Bathroom Vanities')?.imageUrl || '',
        gallery: portfolioItems.find(item => item.category === 'Bathroom Vanities')?.imageFolder || []
      }
    ]
  },
  'closets-and-wardrobes': {
    title: 'Closets & Wardrobes',
    description: 'Maximize your storage space with style',
    styles: [
      {
        id: 1,
        name: 'Closets & Wardrobes',
        description: 'Maximize your storage space with style',
        image: portfolioItems.find(item => item.category === 'Closets & Wardrobes')?.imageUrl || '',
        gallery: portfolioItems.find(item => item.category === 'Closets & Wardrobes')?.imageFolder || []
      }
    ]
  },
  // Add other categories here
};

const relatedCategories = [
  {
    id: 1,
    title: 'Kitchen Cabinets',
    image: '/images/kitchen.webp',
    link: '/portfolio/category/kitchen-cabinets'
  },
  {
    id: 2,
    title: 'Closets & Wardrobes',
    image: '/images/wardrobe.webp',
    link: '/portfolio/category/closets-and-wardrobes'
  },
  {
    id: 3,
    title: 'Living Room Furniture',
    image: '/images/living.webp',
    description: 'The entertainment unit is the focal point of almost every living room. It adds a modern updated look and functionality to the living area providing style and elegance.',
    link: '/portfolio/category/living-room-furniture'
  },
  {
    id: 4,
    title: 'Office Furniture',
    image: '/images/office.webp',
    link: '/portfolio/category/office-furniture'
  }
];

function CategoryPortfolio() {
  const { category } = useParams();
  const [selectedStyle, setSelectedStyle] = useState(null);
  
  const categoryInfo = categoryData[category];

  // Format the category name for display (convert from URL format to display format)
  const displayCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('And', '&');

  if (!categoryInfo) {
    return (
      <div className="pt-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ 
        backgroundImage: `url(${
          category === 'kitchen-cabinets' 
            ? portfolioItems.find(item => item.category === 'Solid Wood')?.imageUrl 
            : categoryInfo.styles[0].image
        })` 
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{displayCategory}</h1>
          <p className="text-xl text-center max-w-2xl">
            {categoryInfo.description}
          </p>
          <div className="mt-8 flex space-x-4">
            <Link to="/" className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link to="/portfolio" className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white/10 transition">
              <FaArrowLeft />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Styles Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryInfo.styles.map((style) => (
            <div 
              key={style.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              onClick={() => setSelectedStyle(style)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-64 object-cover"
                />
                {/* Desktop-only hover overlay and effects */}
                <div className="hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block w-full text-center bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                      View Gallery
                    </span>
                  </div>
                </div>
                {/* Mobile-only permanent overlay and button */}
                <div className="block md:hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block w-full text-center bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      View Gallery
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{style.name}</h3>
                <p className="text-gray-600 text-sm">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentCategory={displayCategory} />

      {/* Modal for showing gallery */}
      {selectedStyle && (
        <Modal
          images={selectedStyle.gallery}
          title={selectedStyle.name}
          onClose={() => setSelectedStyle(null)}
        />
      )}
    </div>
  );
}

export default CategoryPortfolio; 