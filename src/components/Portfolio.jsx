import { useState } from 'react';
import { portfolioItems } from '../data';
import Modal from './Modal';

function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="portfolio" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}

export default Portfolio;