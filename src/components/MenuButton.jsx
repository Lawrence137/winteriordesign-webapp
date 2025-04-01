import { useState } from 'react';

function MenuButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 w-full h-full flex items-center justify-center"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-4 relative flex flex-col justify-between">
        <span
          className={`absolute top-0 w-full h-[2px] bg-white transform transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-[8px]' : ''
          }`}
        />
        <span
          className={`absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute bottom-0 w-full h-[2px] bg-white transform transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-[8px]' : ''
          }`}
        />
      </div>
    </button>
  );
}

export default MenuButton; 