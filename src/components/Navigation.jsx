import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuButton from './MenuButton';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  // Close menu on click outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleMenu();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    // { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between h-[90px] px-6 border-b border-gray-100">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/images/WinteriorLogo2.png" 
            alt="Winterior Design" 
            className="h-[50px] w-auto"
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
        <div className="w-[40px] h-[40px] relative z-[60] md:hidden">
          <MenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>

      {/* Backdrop */}
      <div 
        onClick={handleBackdropClick}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-3/4 h-screen bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-[90px] z-[55] shadow-2xl md:hidden`}
      >
        <div className="px-6 py-8">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                  ? 'text-red-500'
                  : 'text-gray-900 hover:text-red-500'
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 