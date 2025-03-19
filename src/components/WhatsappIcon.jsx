import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppIcon() {
  // Template message
  const message = "Hello Winterior Designs, I am interested in your interior design services. Can you provide more details about your offerings and pricing?";
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "+254728846560"; // Use international format with +
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsAppIcon;