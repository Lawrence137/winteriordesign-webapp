import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

function LayoutModal({ isOpen, onClose, layout }) {
  if (!layout) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-dancing font-bold text-gray-800 mb-2">
                  {layout.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {layout.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <img
                    src={layout.image}
                    alt={layout.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Features:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {layout.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {layout.dimensions && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Dimensions:</h3>
                    <p className="text-gray-600">{layout.dimensions}</p>
                  </div>
                )}

                {layout.materials && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Materials Used:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {layout.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default LayoutModal; 