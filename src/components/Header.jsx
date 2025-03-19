import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <img
            src="/images/WinteriorLogo2.png" // Update this to the actual path if different
            alt="Winterior Design Logo"
            className="h-13 md:h-17 w-auto"
          />
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <a
                href="#home"
                className="hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;