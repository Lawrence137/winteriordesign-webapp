import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/<254718266432>"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsAppIcon;