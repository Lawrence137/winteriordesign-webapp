import { FaMoneyBillWave, FaPaintBrush, FaUsers } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

function About() {
  return (
    <section
      id="about"
      className="py-16 scroll-mt-16 relative text-white"
    >
      {/* Desktop background */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/aboutbg.webp')`,
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
          src="/images/aboutbg.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] relative">
        {/* Title */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-6">
            About Us
          </h2>
        </ScrollReveal>

        {/* Circular CEO Headshot */}
        <ScrollReveal delay={0.2}>
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden rounded-full shadow-md mb-8">
            <img
              src="/images/headshot/headshot.jpg"
              alt="CEO Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* CEO Name and Role */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mb-4">
            <p className="text-lg md:text-xl font-dancing text-white mb-1">
              Lawrence Kimani
            </p>
            <p className="text-lg md:text-xl font-dancing text-white">
              Creative/Art Director
            </p>
          </div>
        </ScrollReveal>

        {/* About Us Text */}
        <ScrollReveal delay={0.4}>
          <div className="text-center w-full md:px-8 mb-8">
            <p className="text-lg mb-4 text-white max-w-2xl mx-auto bg-black/50 p-4 rounded-3xl">
              Winterior Designs Co. is dedicated to creating beautiful and functional spaces that reflect your personal style and needs. With years of experience, our team of designers works closely with clients to bring their vision to life.
            </p>
            <p className="text-lg text-white max-w-2xl mx-auto bg-black/50 p-4 rounded-3xl">
              We believe that every space has the potential to be extraordinary. Let us help you transform your home or office into a place you will love.
            </p>
          </div>
        </ScrollReveal>

        {/* Why Choose Us Section */}
        <div className="w-full mt-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card 1: Reasonable Prices */}
            <ScrollReveal delay={0.5}>
              <div className="step-card bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 max-w-sm h-[280px] flex flex-col items-center">
                <FaMoneyBillWave className="text-red-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Reasonable Prices
                </h3>
                <p className="text-gray-200 text-center">
                  We design kitchens and other interior fittings that fulfill the needs of all people and offer it at affordable and fair prices.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Exclusive Design */}
            <ScrollReveal delay={0.6}>
              <div className="step-card bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 max-w-sm h-[280px] flex flex-col items-center">
                <FaPaintBrush className="text-red-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Exclusive Design
                </h3>
                <p className="text-gray-200 text-center">
                  Mixture of imagination, experience, and professionalism is the secret of our design!
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Professional Team */}
            <ScrollReveal delay={0.7}>
              <div className="step-card bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 max-w-sm h-[280px] flex flex-col items-center">
                <FaUsers className="text-red-500 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Professional Team
                </h3>
                <p className="text-gray-200 text-center">
                  We are proud of our amicable, professional, and always developing team!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;