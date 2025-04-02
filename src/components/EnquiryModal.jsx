import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';

const categories = [
  {
    title: 'Kitchen Cabinets',
    subcategories: ['Mela Edge', 'Solid Wood', 'Spray Paint', 'PVC Wrap and High Gloss']
  },
  {
    title: 'Bathroom Vanities',
    subcategories: ['Undermount', 'Vessel', 'Wall-Mounted', 'Freestanding']
  },
  {
    title: 'Closets & Wardrobes',
    subcategories: ['Walk-in', 'Built-in', 'Sliding', 'Corner Units']
  },
  {
    title: 'TV Units',
    subcategories: []
  }
];

function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    product: '',
    subcategory: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Here you would typically send the form data to your server
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          name: '',
          country: '',
          phone: '',
          email: '',
          product: '',
          subcategory: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setFormData(prev => ({
      ...prev,
      product: category,
      subcategory: ''
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-dancing font-bold text-gray-800 mb-2">Quick Enquiry</h2>
              <p className="text-gray-500 text-xs">Fill out the form below and we'll get back to you shortly</p>
            </div>

            {showSuccess ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <FaCheckCircle className="text-green-500 text-5xl mb-4" />
                <p className="text-lg text-gray-800 text-center font-medium">
                  Thank you for contacting Winterior Design.
                  <br />
                  We will be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      placeholder="Your country"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      value={formData.country}
                      onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="Your email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Product Category</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white appearance-none text-sm"
                      value={formData.product}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.title} value={category.title}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Product Style</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white appearance-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      value={formData.subcategory}
                      onChange={(e) => setFormData(prev => ({ ...prev, subcategory: e.target.value }))}
                      disabled={!selectedCategory || !categories.find(c => c.title === selectedCategory)?.subcategories?.length}
                    >
                      <option value="">Select a style</option>
                      {selectedCategory &&
                        categories
                          .find(c => c.title === selectedCategory)
                          ?.subcategories?.map((sub) => (
                            <option key={sub} value={sub}>
                              {sub}
                            </option>
                          ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-700">Message</label>
                  <textarea
                    placeholder="Tell us about your project"
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none bg-gray-50 hover:bg-white text-sm"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EnquiryModal; 