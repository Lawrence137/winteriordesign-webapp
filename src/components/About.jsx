import { memo } from 'react';
import { FaMoneyBillWave, FaPaintBrush, FaUsers, FaQuoteLeft } from 'react-icons/fa';
import { FaWallet, FaPaintRoller, FaUserGear } from 'react-icons/fa6';
import ScrollReveal from './ScrollReveal';

// Memoize the feature card to prevent unnecessary re-renders
const FeatureCard = memo(({ Icon, title, description, delay }) => (
  <ScrollReveal delay={delay}>
    <div className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/20 transition-all duration-500">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center">
            <Icon className="text-red-500 text-3xl" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </ScrollReveal>
));

// Memoize the feature item to prevent unnecessary re-renders
const FeatureItem = memo(({ Icon, title, description, delay, index }) => (
  <ScrollReveal delay={delay}>
    <div className="group relative overflow-hidden will-change-transform">
      {/* Decorative background elements - Simplified for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent md:from-red-500/10 md:to-transparent rounded-3xl transform md:group-hover:scale-[1.02] transition-transform duration-500 will-change-transform" />
      <div className="absolute inset-0 border border-red-500/20 rounded-3xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content container */}
      <div className="relative p-8">
        <div className="flex items-start gap-6">
          {/* Icon with simplified animation for mobile */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="hidden md:block absolute inset-0 bg-red-500/30 blur-xl rounded-full transform md:group-hover:scale-150 transition-transform duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-red-500/30 to-red-500/10 rounded-2xl flex items-center justify-center transform md:group-hover:scale-110 transition-transform duration-500">
                <Icon className="text-red-500 text-2xl" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-red-500 md:text-white md:group-hover:text-red-500 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Decorative corner elements - Only shown on desktop */}
        <div className="hidden md:block absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-500/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="hidden md:block absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-500/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  </ScrollReveal>
));

function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16 relative text-white overflow-hidden">
      {/* Background elements - Optimized for performance */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/images/aboutbg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'blur(2px)'
        }}
      />

      <div className="block md:hidden absolute inset-0">
        <img
          src="/images/aboutbg.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-[2px]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-black/85" />
      </div>

      {/* Decorative Pulsing Dots - Mobile Optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {/* Extra large dots - Desktop only */}
        <div className="hidden md:block absolute -top-48 -right-48 w-[40rem] h-[40rem] bg-red-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="hidden md:block absolute top-1/4 -right-32 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="hidden md:block absolute -bottom-48 -left-48 w-[30rem] h-[30rem] bg-red-500/10 rounded-full blur-[80px] animate-pulse" />
        
        {/* Mobile-optimized dots - Reduced number but more visible */}
        <div className="absolute top-1/3 left-20 w-48 h-48 bg-red-500/20 rounded-full blur-2xl animate-pulse will-change-transform" />
        <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse-slow will-change-transform" />
        
        {/* Small dots - Limited for mobile */}
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-red-500/40 rounded-full blur-lg animate-pulse-fast will-change-transform" />
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-red-500/35 rounded-full blur-lg animate-pulse will-change-transform" />
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-red-500/30 rounded-full blur-xl animate-pulse-fast will-change-transform" />
        
        {/* Tiny dots - Limited but higher visibility */}
        <div className="absolute top-40 right-1/3 w-8 h-8 bg-red-500/50 rounded-full blur-md animate-pulse-fast will-change-transform" />
        <div className="absolute bottom-1/2 left-1/4 w-12 h-12 bg-red-500/45 rounded-full blur-lg animate-pulse-fast will-change-transform" />
        <div className="absolute top-3/4 right-20 w-10 h-10 bg-red-500/50 rounded-full blur-md animate-pulse-fast will-change-transform" />
      </div>

      <div className="container mx-auto px-4 relative z-[2]">
        {/* Section Header - Optimized */}
        <div className="text-center mb-16 relative">
          <ScrollReveal delay={0.1}>
            <span className="text-red-500 font-medium tracking-wider text-sm uppercase mb-2 block">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-200 max-w-2xl mx-auto text-center text-lg">
              Transforming spaces into extraordinary experiences with passion and precision
            </p>
          </ScrollReveal>
          
          {/* Decorative Elements - Desktop only */}
          <div className="hidden md:block absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-red-500/20 rounded-tl-3xl" />
          <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-red-500/20 rounded-br-3xl" />
        </div>

        {/* Profile and About Content - Optimized backdrop blur */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <ScrollReveal delay={0.2}>
              {/* Circular Headshot with Border */}
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-red-500/20">
                  <img
                    src="/images/headshot/headshot.jpg"
                    alt="CEO Headshot"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Creative Director
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="relative">
                {/* Quote and content container */}
                <div className="relative max-w-3xl mx-auto">
                  {/* Name and role */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                      Lawrence Kimani
                    </h3>
                    <div className="w-12 h-0.5 bg-red-500 mx-auto mb-2" />
                    <p className="text-red-500/80 text-sm font-medium tracking-wider uppercase">
                      Founder & Creative Director
                    </p>
                  </div>

                  {/* Quote marks - Desktop only */}
                  <div className="hidden md:block absolute -left-4 -top-4 text-red-500/10 transform -translate-x-full">
                    <FaQuoteLeft className="w-20 h-20 transform -scale-x-100" />
                  </div>
                  <div className="hidden md:block absolute -right-4 -bottom-4 text-red-500/10 transform rotate-180">
                    <FaQuoteLeft className="w-20 h-20 transform -scale-x-100" />
                  </div>

                  {/* Content cards - Optimized backdrop blur */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 md:bg-gradient-to-br md:from-black/40 md:to-black/20 rounded-3xl p-6 md:p-8 border border-red-500/10">
                      <p className="text-gray-200 leading-relaxed">
                        Winterior Designs Co. is dedicated to creating beautiful and functional spaces that reflect your personal style and needs. With years of experience, our team of designers works closely with clients to bring their vision to life.
                      </p>
                    </div>
                    <div className="bg-black/40 md:bg-gradient-to-br md:from-black/40 md:to-black/20 rounded-3xl p-6 md:p-8 border border-red-500/10">
                      <p className="text-gray-200 leading-relaxed">
                        We believe that every space has the potential to be extraordinary. Let us help you transform your home or office into a place you will love.
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-red-500/20 to-transparent" />
                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                          <FaQuoteLeft className="text-red-500/60 text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <ScrollReveal delay={0.4}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Us
              </h3>
              <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <FeatureItem
              Icon={FaWallet}
              title="Reasonable Prices"
              description="We design kitchens and other interior fittings that fulfill the needs of all people and offer it at affordable and fair prices."
              delay={0.5}
              index={0}
            />
            <FeatureItem
              Icon={FaPaintRoller}
              title="Exclusive Design"
              description="Mixture of imagination, experience, and professionalism is the secret of our design!"
              delay={0.6}
              index={1}
            />
            <FeatureItem
              Icon={FaUserGear}
              title="Professional Team"
              description="We are proud of our amicable, professional, and always developing team!"
              delay={0.7}
              index={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);