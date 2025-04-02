import { memo } from 'react';
import { FaRegLightbulb, FaCubes, FaRegHandshake } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

// Memoize the process step card to prevent unnecessary re-renders
const ProcessStep = memo(({ Icon, title, description, delay }) => (
  <ScrollReveal delay={delay}>
    <div className="group relative">
      {/* Animated Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
      
      {/* Card Content */}
      <div className="relative bg-black/40 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[280px] flex flex-col items-center border border-white/10">
        {/* Icon Container with Glow Effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative bg-gradient-to-br from-red-400/80 to-red-600/80 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-red-500/20">
            <Icon className="text-white text-2xl transform group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* Title with Gradient */}
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-200 text-center leading-relaxed">
          {description}
        </p>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500/20 rounded-tl-xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500/20 rounded-br-xl"></div>
      </div>
    </div>
  </ScrollReveal>
));

const processSteps = [
  {
    Icon: FaRegLightbulb,
    title: "Discovery & Planning",
    description: "We begin by understanding your vision, needs, and style preferences to create a personalized design approach."
  },
  {
    Icon: FaCubes,
    title: "Design & Visualization",
    description: "Experience your space before it's built with our detailed 3D designs and immersive visualization process."
  },
  {
    Icon: FaRegHandshake,
    title: "Execution & Delivery",
    description: "Watch your vision come to life as we meticulously craft and install every element to perfection."
  }
];

function Process() {
  return (
    <section
      id="process"
      className="relative pt-8 pb-16 text-white"
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
          willChange: 'transform'
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
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 text-center relative">
        {/* Header Container with Backdrop */}
        <div className="relative mb-12 mx-auto max-w-[calc(100%-2rem)] md:max-w-none">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl"></div>
          
          {/* Title with Enhanced Decoration */}
          <div className="relative py-6 px-4 md:px-2">
            {/* Decorative Top Line */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-red-500/70 to-transparent"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-500/30 animate-pulse"></div>
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-red-500/70 to-transparent"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-lg font-medium tracking-wider uppercase mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-400 text-transparent bg-clip-text">
              Our Process
            </h2>

            {/* Decorative Bottom Line */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
              <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-red-500/40"></div>
              <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            </div>

            {/* Description with Enhanced Styling */}
            <div className="relative max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-gray-100 leading-relaxed px-2">
                One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together. Winterior Design talented team listens, researches, synthesizes, and implements.
              </p>
              
              {/* Corner Decorations */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-red-500/40 rounded-tl-xl"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-red-500/40 rounded-br-xl"></div>
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute -top-2 sm:-top-4 left-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-red-500/40 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 right-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-red-500/40 rounded-full animate-ping delay-300"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-red-500/40 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.title}
              Icon={step.Icon}
              title={step.title}
              description={step.description}
              delay={0.3 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Process);