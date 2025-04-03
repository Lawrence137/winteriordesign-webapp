import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useEnquiry } from '../context/EnquiryContext';

const PRODUCT_STYLES = {
  default: [
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Transitional', label: 'Transitional' },
    { value: 'Other', label: 'Other' }
  ],
  'Kitchen Cabinets': [
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Shaker', label: 'Shaker Style' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Industrial', label: 'Industrial' },
    { value: 'Rustic', label: 'Rustic' },
    { value: 'Other', label: 'Other' }
  ],
  'Bathroom Vanities': [
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Floating', label: 'Floating/Wall-Mounted' },
    { value: 'Vintage', label: 'Vintage' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Other', label: 'Other' }
  ],
  'Closets & Wardrobes': [
    { value: 'Walk-in', label: 'Walk-in Closet' },
    { value: 'Reach-in', label: 'Reach-in Wardrobe' },
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Classic', label: 'Classic' },
    { value: 'Other', label: 'Other' }
  ],
  'TV Units': [
    { value: 'Floating', label: 'Floating/Wall-Mounted' },
    { value: 'Modern', label: 'Modern' },
    { value: 'Contemporary', label: 'Contemporary' },
    { value: 'Entertainment Center', label: 'Full Entertainment Center' },
    { value: 'Minimalist', label: 'Minimalist' },
    { value: 'Other', label: 'Other' }
  ]
};

const EnquiryForm = () => {
  const {
    isOpen,
    formData,
    isSubmitting,
    submitStatus,
    closeEnquiryForm,
    handleChange,
    handleSubmit,
    getAvailableStyles
  } = useEnquiry();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeEnquiryForm()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6"
          >
            <button
              onClick={closeEnquiryForm}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-dancing font-bold text-gray-800 mb-2">Quick Enquiry</h2>
              <p className="text-gray-500 text-xs">Fill out the form below and we'll get back to you shortly</p>
            </div>

            {submitStatus === 'success' ? (
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
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Product Category</label>
                    <select
                      name="product_category"
                      value={formData.product_category}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white appearance-none text-sm"
                    >
                      <option value="">Select a category</option>
                      <option value="Kitchen Cabinets">Kitchen Cabinets</option>
                      <option value="Bathroom Vanities">Bathroom Vanities</option>
                      <option value="Closets & Wardrobes">Closets & Wardrobes</option>
                      <option value="TV Units">TV Units</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-700">Product Style</label>
                    <select
                      name="product_style"
                      value={formData.product_style}
                      onChange={handleChange}
                      required
                      disabled={!formData.product_category}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all appearance-none text-sm ${
                        !formData.product_category ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 hover:bg-white'
                      }`}
                    >
                      <option value="">Select a style</option>
                      {getAvailableStyles().map(style => (
                        <option key={style.value} value={style.value}>
                          {style.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none bg-gray-50 hover:bg-white text-sm"
                    placeholder="Tell us about your project"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] text-sm ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center mt-2 text-sm">
                    Sorry, there was an error sending your enquiry. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryForm; 