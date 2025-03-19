import { FaMoneyBillWave, FaPaintBrush, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="py-16 scroll-mt-16 relative"
      style={{
        backgroundImage: "url('/images/aboutbg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed', // Optional: Parallax effect
      }}
    >
      {/* Semi-transparent overlay with blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        style={{ zIndex: 1 }}
      ></div>

      

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] relative" style={{ zIndex: 2 }}>
      <h2 className="text-3xl font-bold mb-6 text-white">About Us</h2>
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
        <div className="text-center w-full md:px-8">
          <p className="text-lg mb-4 text-white">
            Winterior Designs Co. is dedicated to creating beautiful and functional spaces that reflect your personal style and needs. With years of experience, our team of designers works closely with clients to bring their vision to life.
          </p>
          <p className="text-lg text-white">
            We believe that every space has the potential to be extraordinary. Let us help you transform your home or office into a place you will love.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mt-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card 1: Reasonable Prices */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 max-w-sm">
              <FaMoneyBillWave className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
                Reasonable Prices
              </h3>
              <p className="text-gray-600 text-center">
                We design kitchens and other interior fittings that fulfill the needs of all people and offer it at affordable and fair prices.
              </p>
            </div>

            {/* Card 2: Exclusive Design */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 max-w-sm">
              <FaPaintBrush className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
                Exclusive Design
              </h3>
              <p className="text-gray-600 text-center">
                Mixture of imagination, experience, and professionalism is the secret of our design!
              </p>
            </div>

            {/* Card 3: Professional Team */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 max-w-sm">
              <FaUsers className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
                Professional Team
              </h3>
              <p className="text-gray-600 text-center">
                We are proud of our amicable, professional, and always developing team!
              </p>
            </div>
          </div>

          {/* Tagline (Commented Out) */}
          {/* <div className="text-center mt-8">
            <p className="text-3xl md:text-4xl font-dancing text-teal-400">
              We Transform Your Home
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;