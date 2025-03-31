import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import { FaArrowLeft, FaHome, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { portfolioItems } from '../data';
import RelatedProducts from '../components/RelatedProducts';

const kitchenLayouts = [
  {
    id: 1,
    name: 'L-Shaped Kitchen Cabinets',
    description: 'Perfect for open floor plans, offering plenty of counter space and a natural work triangle.',
    image: '/images/layouts/L-shaped-kitchen.jpg',
    details: 'The L-shaped layout is one of the most popular kitchen designs, perfect for both small and large spaces. It provides an efficient work triangle and plenty of counter space for food preparation. This layout works well in open-concept homes and can accommodate an island or dining table in the center.',
    features: [
      'Efficient work triangle',
      'Plenty of counter space',
      'Good for open floor plans',
      'Can accommodate an island',
      'Perfect for small to medium kitchens'
    ]
  },
  {
    id: 2,
    name: 'U-Shaped Kitchen Cabinets',
    description: 'Maximizes storage and counter space with cabinets on three walls.',
    image: '/images/layouts/U-shaped-kitchen.jpg',
    details: 'The U-shaped kitchen layout offers maximum storage and counter space, making it ideal for larger kitchens. With cabinets and appliances on three walls, you have everything within easy reach. This layout is perfect for multiple cooks working together.',
    features: [
      'Maximum storage space',
      'Plenty of counter space',
      'Ideal for multiple cooks',
      'Perfect for larger kitchens',
      'Great for entertaining'
    ]
  },
  {
    id: 3,
    name: 'Island Kitchen Cabinets',
    description: 'Adds extra workspace and storage while creating a social hub in your kitchen.',
    image: '/images/layouts/island-kitchen.jpg',
    details: 'An island kitchen layout adds a central workspace that can serve multiple functions. It provides additional storage, seating, and preparation space while creating a natural gathering spot for family and friends.',
    features: [
      'Additional workspace',
      'Extra storage',
      'Social gathering spot',
      'Can include seating',
      'Perfect for open-concept homes'
    ]
  },
  {
    id: 4,
    name: 'One Wall Kitchen Cabinets',
    description: 'Ideal for small spaces, with all cabinets and appliances along a single wall.',
    image: '/images/layouts/one-wall-kitchen.jpg',
    details: 'The one-wall kitchen layout is perfect for small spaces and studio apartments. It keeps everything in a single line, making it efficient and easy to navigate. This layout is also great for open-concept living spaces.',
    features: [
      'Space-efficient',
      'Perfect for small kitchens',
      'Easy to navigate',
      'Great for open-concept spaces',
      'Ideal for studio apartments'
    ]
  },
  {
    id: 5,
    name: 'Peninsula Kitchen Cabinets',
    description: 'Similar to an island layout but connected to a wall, perfect for medium-sized kitchens.',
    image: '/images/layouts/peninsula-kitchen.jpg',
    details: 'A peninsula kitchen layout extends from a wall or cabinet run, creating additional workspace and storage. It provides many of the benefits of an island while being more space-efficient and offering better traffic flow.',
    features: [
      'Additional workspace',
      'Better traffic flow',
      'Space-efficient',
      'Can include seating',
      'Perfect for medium-sized kitchens'
    ]
  }
];

// This would come from your data file
const categoryData = {
  'kitchen-cabinets': {
    title: 'Kitchen Cabinets',
    description: 'Custom kitchen solutions for your home',
    styles: [
      {
        id: 1,
        name: 'Cleanline Handless',
        description: 'A sleek and modern kitchen design with Cleanline Handless in high gloss finish.',
        image: portfolioItems.find(item => item.category === 'Cleanline Handless')?.imageUrl,
        gallery: portfolioItems.find(item => item.category === 'Cleanline Handless')?.imageFolder
      },
      {
        id: 2,
        name: 'Solid Wood',
        description: 'Traditional and timeless solid wood kitchens',
        image: portfolioItems.find(item => item.category === 'Solid Wood')?.imageUrl,
        gallery: portfolioItems.find(item => item.category === 'Solid Wood')?.imageFolder
      },
      {
        id: 3,
        name: 'Spray Paint',
        description: 'Custom colored cabinets for a unique look',
        image: portfolioItems.find(item => item.category === 'Spray Paint')?.imageUrl,
        gallery: portfolioItems.find(item => item.category === 'Spray Paint')?.imageFolder
      },
      {
        id: 4,
        name: 'PVC Wrap and High Gloss',
        description: 'Modern and sleek finishes with PVC wrap and high gloss surfaces',
        image: portfolioItems.find(item => item.category === 'PVC Wrap and High Gloss')?.imageUrl,
        gallery: portfolioItems.find(item => item.category === 'PVC Wrap and High Gloss')?.imageFolder
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
        image: portfolioItems.find(item => item.category === 'Bathroom Vanities')?.imageUrl,
        gallery: portfolioItems.find(item => item.category === 'Bathroom Vanities')?.imageFolder
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
        image: portfolioItems.find(item => item.category === 'Closets & Wardrobes')?.imageUrl,
        gallery: portfolioItems.find(item => item.category === 'Closets & Wardrobes')?.imageFolder
      }
    ]
  },
  'tv-units': {
    title: 'TV Units',
    description: 'Modern entertainment units that combine style and functionality',
    styles: [
      {
        id: 1,
        name: 'TV Units',
        description: 'Modern entertainment units that combine style and functionality',
        image: portfolioItems.find(item => item.category === 'TV Units')?.imageUrl,
        gallery: portfolioItems.find(item => item.category === 'TV Units')?.imageFolder
      }
    ]
  }
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
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [showStickyNav, setShowStickyNav] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  // Handle scroll event for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const buttonsSection = document.getElementById('hero-buttons');
      if (heroSection && buttonsSection) {
        const buttonsRect = buttonsSection.getBoundingClientRect();
        // 80 is the height of the main navbar
        setShowStickyNav(buttonsRect.top <= 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categoryInfo = categoryData[category];
  const heroBackgroundImage = portfolioItems.find(item => 
    category === 'kitchen-cabinets' 
      ? item.category === 'Solid Wood'
      : item.category === categoryInfo.styles[0].name
  )?.imageUrl || '/images/portfolio/default.jpg';

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
      {/* Sticky Navigation - positioned below main navbar */}
      <div className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        showStickyNav ? 'top-20' : '-top-full'
      }`}>
        <div className="h-24 relative shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: `url(${heroBackgroundImage})`,
            filter: 'brightness(0.3) blur(2px)'
          }} />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex space-x-4 sm:space-x-6">
              <Link to="/" className="flex items-center space-x-2 bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition shadow-md text-sm sm:text-base">
                <FaHome className="text-base sm:text-lg" />
                <span>Home</span>
              </Link>
              <Link to="/portfolio" className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/10 transition shadow-md text-sm sm:text-base">
                <FaArrowLeft className="text-base sm:text-lg" />
                <span>Back to Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero-section" className="relative h-[50vh] bg-cover bg-center" style={{ 
        backgroundImage: `url(${heroBackgroundImage})` 
      }}>
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/60" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{displayCategory}</h1>
          <p className="text-xl text-center max-w-2xl mb-12">
            {categoryInfo.description}
          </p>
          <div id="hero-buttons" className="flex space-x-4 sm:space-x-6">
            <Link to="/" className="flex items-center space-x-2 bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition shadow-md text-sm sm:text-base">
              <FaHome className="text-base sm:text-lg" />
              <span>Home</span>
            </Link>
            <Link to="/portfolio" className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/10 transition shadow-md text-sm sm:text-base">
              <FaArrowLeft className="text-base sm:text-lg" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Kitchen Layouts Section - Only shown for kitchen-cabinets category */}
      {category === 'kitchen-cabinets' && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kitchen Cabinet Layouts</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our various kitchen cabinet layouts to find the perfect design for your space
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kitchenLayouts.map((layout) => (
                <div 
                  key={layout.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedLayout(layout)}
                >
                  <div className="relative h-64">
                    <img
                      src={layout.image}
                      alt={layout.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Desktop hover overlay */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold flex items-center gap-2">
                        <FaInfoCircle />
                        View Details
                      </span>
                    </div>
                    {/* Mobile and tablet permanent overlay */}
                    <div className="absolute inset-0 md:hidden flex items-center justify-center bg-black/40">
                      <span className="text-white text-lg font-semibold flex items-center gap-2">
                        <FaInfoCircle />
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{layout.name}</h3>
                    <p className="text-gray-600">{layout.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Styles Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryInfo.styles.map((style) => (
            <div 
              key={style.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
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

      {/* Modal for showing layout details */}
      {selectedLayout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedLayout.image}
                alt={selectedLayout.name}
                className="w-full h-96 object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedLayout(null)}
                className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedLayout.name}</h2>
              <p className="text-gray-600 mb-6">{selectedLayout.details}</p>
              <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedLayout.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryPortfolio; 