import { FaMoneyBillWave, FaPaintBrush, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="py-16 scroll-mt-16 relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/aboutbg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] relative">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-6">
          About Us
        </h2>

        {/* Circular CEO Headshot */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden rounded-full shadow-md mb-8">
          <img
            src="/images/ceo-headshot.webp"
            alt="CEO Headshot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CEO Name and Role */}
        <div className="text-center mb-4">
          <p className="text-lg md:text-xl font-dancing text-white mb-1">
            Lawrence Kimani
          </p>
          <p className="text-lg md:text-xl font-dancing text-white">
            Creative/Art Director
          </p>
        </div>

        {/* About Us Text */}
        <div className="text-center w-full md:px-8 mb-8">
          <p className="text-lg mb-4 text-white max-w-2xl mx-auto bg-black/50 p-4 rounded-3xl">
            Winterior Designs Co. is dedicated to creating beautiful and functional spaces that reflect your personal style and needs. With years of experience, our team of designers works closely with clients to bring their vision to life.
          </p>
          <p className="text-lg text-white max-w-2xl mx-auto bg-black/50 p-4 rounded-3xl">
            We believe that every space has the potential to be extraordinary. Let us help you transform your home or office into a place you will love.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mt-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card 1: Reasonable Prices */}
            <div className="step-card bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 max-w-sm">
              <FaMoneyBillWave className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Reasonable Prices
              </h3>
              <p className="text-gray-200 text-center">
                We design kitchens and other interior fittings that fulfill the needs of all people and offer it at affordable and fair prices.
              </p>
            </div>

            {/* Card 2: Exclusive Design */}
            <div className="step-card bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 max-w-sm">
              <FaPaintBrush className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Exclusive Design
              </h3>
              <p className="text-gray-200 text-center">
                Mixture of imagination, experience, and professionalism is the secret of our design!
              </p>
            </div>

            {/* Card 3: Professional Team */}
            <div className="step-card bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 max-w-sm">
              <FaUsers className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Professional Team
              </h3>
              <p className="text-gray-200 text-center">
                We are proud of our amicable, professional, and always developing team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;