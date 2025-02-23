import { FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 scroll-mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-4">Have a project in mind? We would love to hear from you!</p>
        <p className="text-lg mb-8">Contact us via WhatsApp or email.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://wa.me/<designer's-number>"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded flex items-center"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <a
            href="mailto:info@interiordesignco.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;