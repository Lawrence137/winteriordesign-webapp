import { FaMoneyBillWave, FaPaintBrush, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-100 scroll-mt-16">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
        {/* Circular CEO Headshot */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden rounded-full shadow-md mb-8">
          <img
            src="/images/ceo-headshot.webp" // Update this to the actual path of the CEO's headshot
            alt="CEO Headshot"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center mb-4">
          <p className="text-lg md:text-xl font-dancing text-gray-800 mb-1">
            Lawrence Kimani
          </p>
          <p className="text-lg md:text-xl font-dancing text-gray-800">
          Creative/Art Director
          </p>
        </div>

        {/* About Us Text */}
        <div className="text-center w-full md:px-8">
          <p className="text-lg mb-4">
            Winterior Designs Co. is dedicated to creating beautiful and functional spaces that reflect your personal style and needs. With years of experience, our team of designers works closely with clients to bring their vision to life.
          </p>
          <p className="text-lg">
            We believe that every space has the potential to be extraordinary. Let us help you transform your home or office into a place you will love.
          </p>
        </div>

              {/* Why Choose Us Section */}
              <div className="w-full mt-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card 1: Reasonable Prices */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 max-w-sm">
              <FaMoneyBillWave className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Reasonable Prices</h3>
              <p className="text-gray-600 text-center">
                We design kitchens and other interior fittings that fulfill the needs of all people and offer it at affordable and fair prices.
              </p>
            </div>

            {/* Card 2: Exclusive Design */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 max-w-sm">
              <FaPaintBrush className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Exclusive Design</h3>
              <p className="text-gray-600 text-center">
                Mixture of imagination, experience, and professionalism is the secret of our design!
              </p>
            </div>

            {/* Card 3: Professional Team */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 max-w-sm">
              <FaUsers className="text-teal-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Professional Team</h3>
              <p className="text-gray-600 text-center">
                We are proud of our amicable, professional, and always developing team!
              </p>
            </div>
          </div>

          {/* Tagline */}
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