import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import OptimizedImage from './OptimizedImage';

function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  // Designer's phone number and WhatsApp template message
  const phoneNumber = "+254728846560"; // International format
  const message = "Hello Winterior Designs, I'm interested in your interior design services. Can you provide more details about your offerings and pricing?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive interior design services including residential, commercial, and hospitality projects. Our services range from space planning to full project management."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A typical residential project can take 3-6 months, while larger commercial projects may take 6-12 months."
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, we work with clients worldwide. Our team is equipped to handle remote consultations and project management effectively."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <OptimizedImage 
                src="/images/winteriordarklogo2.png" 
                alt="Winterior Design" 
                className="h-12 w-auto"
                width={245}
                height={75}
                priority={true}
                isLogo={true}
                sizes="(max-width: 640px) 163px, 245px"
              />
              <p className="text-sm">
                Creating exceptional spaces that inspire and delight. Your vision, our expertise.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a 
                  href="https://web.facebook.com/WinteriorDesigns" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* FAQs */}
          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">FAQs</h3>
              <ul className="space-y-2">
                {faqs.map((faq, index) => (
                  <li key={index} className="border-b border-gray-800 last:border-0">
                    <button 
                      className="w-full text-left hover:text-white transition-colors text-sm py-2 flex items-center justify-between"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <FaChevronDown 
                        className={`transform transition-transform duration-200 ${
                          openFaqIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm text-gray-400 py-2">
                        {faq.answer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.4}>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaPhone className="mt-1" />
                  <div>
                    <p className="text-sm">Phone</p>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="text-sm hover:text-white transition-colors"
                    >
                      +254 728 846 560
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaEnvelope className="mt-1" />
                  <div>
                    <p className="text-sm">Email</p>
                    <a 
                      href="mailto:info@winteriordesign.com"
                      className="text-sm hover:text-white transition-colors"
                    >
                      info@winteriordesign.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1" />
                  <div>
                    <p className="text-sm">Address</p>
                    <p className="text-sm">
                      Nairobi, Kenya
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full flex items-center justify-center w-full transition text-sm"
                >
                  <FaWhatsapp className="mr-2" /> WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <ScrollReveal delay={0.5}>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Winterior Design. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}

export default Contact;