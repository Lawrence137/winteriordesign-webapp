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

        {/* About Us Text */}
        <div className="text-center w-full md:px-8">
          <p className="text-lg mb-4">
            Winterior Designs Co. is dedicated to creating beautiful and functional spaces that reflect your personal style and needs. With years of experience, our team of designers works closely with clients to bring their vision to life.
          </p>
          <p className="text-lg">
            We believe that every space has the potential to be extraordinary. Let us help you transform your home or office into a place you will love.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;