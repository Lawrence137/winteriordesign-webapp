import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuButton from './MenuButton';
import { FaChevronRight, FaHome, FaInfoCircle, FaImages, FaPhone, FaUtensils, FaBath, FaDoorClosed, FaTv } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleMenu();
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const menuItems = [
    { 
      path: '/', 
      label: 'Home',
      icon: <FaHome className="w-5 h-5" />
    },
    { 
      path: '/about', 
      label: 'About',
      icon: <FaInfoCircle className="w-5 h-5" />
    },
    { 
      path: '/portfolio/category/kitchen-cabinets', 
      label: 'Kitchens',
      icon: <FaUtensils className="w-5 h-5" />
    },
    { 
      path: '/portfolio/category/closets-and-wardrobes', 
      label: 'Wardrobes',
      icon: <FaDoorClosed className="w-5 h-5" />
    },
    { 
      path: '/portfolio/category/bathroom-vanities', 
      label: 'Vanities',
      icon: <FaBath className="w-5 h-5" />
    },

    { 
      path: '/portfolio/category/tv-units', 
      label: 'TV Units',
      icon: <FaTv className="w-5 h-5" />
    },
    { 
      path: '/contact', 
      label: 'Contact',
      icon: <FaPhone className="w-5 h-5" />
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-[90px] px-6 border-b border-gray-50">
        {/* Logo */}
        <Link to="/" className="flex items-center transition-transform duration-200 hover:scale-[1.02]">
          <OptimizedImage 
            src="/images/WinteriorLogo2.png" 
            alt="Winterior Design" 
            className="h-[45px] w-auto"
            width={245}
            height={75}
            priority={true}
            isLogo={true}
            sizes="(max-width: 640px) 163px, 245px"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium transition-all duration-200 relative group ${
                location.pathname === item.path
                ? 'text-red-500'
                : 'text-gray-900 hover:text-red-500'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full ${
                location.pathname === item.path ? 'w-full' : ''
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="w-[40px] h-[40px] relative z-[110] md:hidden">
          <MenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 z-[100]" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-72 bg-white shadow-lg transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="p-6 border-b border-gray-100">
              <OptimizedImage 
                src="/images/WinteriorLogo2.png" 
                alt="Winterior Design" 
                className="h-8 w-auto"
                width={163}
                height={50}
                priority={true}
                isLogo={true}
                sizes="163px"
              />
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6">
              <div className="px-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-red-50 text-red-500'
                        : 'hover:bg-gray-50 text-gray-900'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="p-6 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                © 2024 Winterior Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 