function About() {
    return (
      <section id="about" className="py-16 bg-gray-100 scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/path/to/about-image.jpg"
                alt="About Interior Design Co."
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Winterior Designs Co. is dedicated to creating beautiful and functional spaces that reflect your personal style and needs. With years of experience, our team of designers works closely with clients to bring their vision to life.
              </p>
              <p className="text-lg">
                We believe that every space has the potential to be extraordinary. Let us help you transform your home or office into a place youll love.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;