import { memo } from 'react';
import { FaRegLightbulb, FaCubes, FaRegHandshake } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

// Memoize the process step card to prevent unnecessary re-renders
const ProcessStep = memo(({ Icon, title, description, delay }) => (
  <ScrollReveal delay={delay}>
    <div className="relative md:group">
      {/* Background Effect - Hover only on desktop */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl opacity-30 md:group-hover:opacity-50 md:transition md:duration-500">
        <div className="absolute inset-0 shadow-[0_0_30px_10px_rgba(239,68,68,0.2)]" />
      </div>
      
      {/* Card Content - Hover effects only on desktop */}
      <div className="relative bg-black/60 md:backdrop-blur-sm p-8 rounded-3xl shadow-xl md:hover:shadow-2xl md:transition-all md:duration-500 h-[280px] flex flex-col items-center border border-white/10">
        {/* Icon Container with Glow Effect - Hover only on desktop */}
        <div className="relative mb-6">
          {/* Desktop-only blur effect with hover */}
          <div className="hidden md:block absolute inset-0 bg-red-500/20 rounded-full blur-md md:group-hover:scale-110 md:transition-transform md:duration-500" />
          {/* Mobile-optimized glow using box-shadow */}
          <div className="relative bg-gradient-to-br from-red-400/80 to-red-600/80 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_15px_5px_rgba(239,68,68,0.3)] border border-red-500/20">
            <Icon className="text-white text-2xl md:group-hover:scale-110 md:transition-transform md:duration-500" />
          </div>
        </div>

        {/* Title - Hover effect only on desktop */}
        <h3 className="text-xl font-bold mb-4 text-white md:group-hover:text-red-100 md:transition-colors md:duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-200 text-center leading-relaxed">
          {description}
        </p>

        {/* Corner Elements */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500/20 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500/20 rounded-br-xl" />
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
      {/* Desktop background - Optimized with reduced blur */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/background/processbd2.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'blur(1px)'
        }}
      />

      {/* Mobile background - Optimized with opacity */}
      <div className="block md:hidden absolute inset-0">
        <img
          src="/images/background/processbd2.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/90" />
      </div>

      <div className="container mx-auto px-4 text-center relative">
        {/* Header Container - Optimized backdrop blur */}
        <div className="relative mb-12 mx-auto max-w-[calc(100%-2rem)] md:max-w-none">
          {/* Background Effect - Mobile optimized */}
          <div className="absolute inset-0 bg-black/70 md:backdrop-blur-sm rounded-2xl" />
          
          {/* Title with Enhanced Decoration - Simplified animations */}
          <div className="relative py-6 px-4 md:px-2">
            {/* Decorative Top Line - Reduced complexity */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-500/30" />
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />
            </div>

            {/* Main Title */}
            <h2 className="text-lg font-medium tracking-wider uppercase mb-4 text-red-500">
              Our Process
            </h2>

            {/* Decorative Bottom Line - Simplified */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
              <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-red-500/40" />
              <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            </div>

            {/* Description with Enhanced Styling - Optimized for mobile */}
            <div className="relative max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-gray-100 leading-relaxed px-2">
                One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together. Winterior Design talented team listens, researches, synthesizes, and implements.
              </p>
              
              {/* Corner Decorations - Desktop only */}
              <div className="hidden md:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-red-500/40 rounded-tl-xl" />
              <div className="hidden md:block absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-red-500/40 rounded-br-xl" />
            </div>

            {/* Mobile-optimized Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/40 rounded-full shadow-[0_0_10px_2px_rgba(239,68,68,0.3)] will-change-transform" />
              <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-red-500/40 rounded-full shadow-[0_0_10px_2px_rgba(239,68,68,0.3)] will-change-transform" />
              <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-red-500/40 rounded-full shadow-[0_0_10px_2px_rgba(239,68,68,0.3)] will-change-transform" />
            </div>
          </div>
        </div>

        {/* Process Steps Grid */}
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