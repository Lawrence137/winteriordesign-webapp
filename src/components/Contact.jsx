import { FaWhatsapp } from 'react-icons/fa';

function Contact() {
  // Designer’s phone number and WhatsApp template message
  const phoneNumber = "+254728846560"; // International format
  const message = "Hello Winterior Designs, I’m interested in your interior design services. Can you provide more details about your offerings and pricing?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <section id="contact" className="py-16 bg-gray-100 scroll-mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-4">Have a project in mind? We would love to hear from you!</p>
        <p className="text-lg mb-8">Contact us via WhatsApp or email.</p>
        <div className="flex justify-center space-x-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-3xl flex items-center justify-center w-40 transition"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <a
            href="mailto:info@interiordesignco.com"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-3xl flex items-center justify-center w-40 transition"
            aria-label="Email us"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;