

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center scroll-mt-20 pt-20 bg-gradient-to-r from-beige-300 via-gray-300 to-blue-300 animate-fade-gradient"
    >
      <img
        src="/path/to/hero-image.jpg" // Update with your actual image path
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 text-center text-black">
        <h2 className="text-5xl font-bold mb-4">Transform Your Space</h2>
        <p className="text-xl mb-8">
          Expert interior design services for your home or office
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;