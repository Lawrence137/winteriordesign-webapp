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
      path: '/portfolio', 
      label: 'Portfolio',
      icon: <FaImages className="w-5 h-5" />,
      subItems: [
        { 
          path: '/portfolio/category/kitchen-cabinets', 
          label: 'Kitchen Cabinets',
          icon: <FaUtensils className="w-4 h-4" />,
          description: 'Modern designs for a functional and stylish kitchen'
        },
        { 
          path: '/portfolio/category/bathroom-vanities', 
          label: 'Bathroom Vanities',
          icon: <FaBath className="w-4 h-4" />,
          description: 'Elegant bathroom solutions for your home'
        },
        { 
          path: '/portfolio/category/closets-and-wardrobes', 
          label: 'Closets & Wardrobes',
          icon: <FaDoorClosed className="w-4 h-4" />,
          description: 'Custom storage solutions for any space'
        },
        { 
          path: '/portfolio/category/tv-units', 
          label: 'TV Units',
          icon: <FaTv className="w-4 h-4" />,
          description: 'Contemporary entertainment unit designs'
        }
      ]
    },
    { 
      path: '/contact', 
      label: 'Contact',
      icon: <FaPhone className="w-5 h-5" />
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between h-[90px] px-6 border-b border-gray-100">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <OptimizedImage 
            src="/images/WinteriorLogo2.png" 
            alt="Winterior Design" 
            className="h-[50px] w-auto"
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
              className={`text-base font-medium transition-colors duration-200 ${
                location.pathname === item.path
                ? 'text-red-500'
                : 'text-gray-900 hover:text-red-500'
              }`}
            >
              {item.label}
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
                  <div key={item.path} className="mb-2">
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === item.path ? null : item.path)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors duration-200 ${
                            location.pathname.startsWith(item.path)
                              ? 'bg-red-50 text-red-500'
                              : 'hover:bg-gray-50 text-gray-900'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <FaChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                            activeSubmenu === item.path ? 'rotate-90' : ''
                          }`} />
                        </button>
                        {/* Submenu */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          activeSubmenu === item.path ? 'max-h-[400px]' : 'max-h-0'
                        }`}>
                          <div className="pl-4 pr-3 py-2 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={toggleMenu}
                                className={`block p-4 rounded-xl transition-all duration-200 hover:bg-gray-50 ${
                                  location.pathname === subItem.path
                                    ? 'bg-red-50' : ''
                                }`}
                              >
                                <div className="flex items-center gap-3 text-gray-900">
                                  {subItem.icon}
                                  <div>
                                    <div className={`font-medium ${
                                      location.pathname === subItem.path
                                        ? 'text-red-500' : ''
                                    }`}>
                                      {subItem.label}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
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
                    )}
                  </div>
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