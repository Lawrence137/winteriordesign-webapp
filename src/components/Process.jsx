import { FaSearch, FaCube, FaCheckCircle } from 'react-icons/fa';

function Process() {
  return (
    <section
      id="process"
      className="relative py-16 text-white"
    >
      {/* Desktop background */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background/processbd2.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Mobile background */}
      <div 
        className="block md:hidden absolute inset-0"
      >
        <img
          src="/images/background/processbd2.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 text-center relative">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-4">
          Creating Your Space Together
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl bg-black/50 p-4 rounded-3xl mb-8">
          One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together. Winterior Design talented team listens, researches, synthesizes, and implements.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="step-card bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaSearch className="text-red-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p className="text-gray-200">
              Identifying client needs and objectives.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaCube className="text-red-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p className="text-gray-200">
              Personalized 3D design samples to give you an idea of the look and feel.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaCheckCircle className="text-red-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p className="text-gray-200">
              Delivering client envisioned products. Our clients are always exemplary happy. Thank you for trusting us with your interiors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;