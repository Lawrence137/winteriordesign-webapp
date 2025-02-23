import { FaTimes } from 'react-icons/fa';

function Modal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={24} />
        </button>
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-64 object-cover mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-700">{item.description}</p>
      </div>
    </div>
  );
}

export default Modal;