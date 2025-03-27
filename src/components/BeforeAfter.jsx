import { useState } from 'react';

function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial position at 50%

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section id="before-after" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h3 className="text-sm md:text-base font-semibold text-gray-600 uppercase mb-2">
            Before & After
          </h3>
          <h2 className="text-3xl md:text-4xl font-dancing font-bold text-gray-800 mb-4">
            A Modern Approach to Design
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 bg-white/50 p-4 rounded-3xl">
            Work with an experienced designer to create your one-of-a-kind kitchen, backed by a perfect fit guarantee.
          </p>
        </div>

        {/* Before & After Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl shadow-md overflow-hidden">
            {/* Before Image */}
            <img
              src="/images/slide1.webp"
              alt="Before Kitchen"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* After Image (clipped based on slider position) */}
            <div
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/images/slide2.webp"
                alt="After Kitchen"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            {/* Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
            />
            {/* Slider Handle and Line */}
            <div
              className="absolute top-0 h-full w-1 bg-teal-400 z-10 transition-all duration-300"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center shadow-md hover:scale-125 hover:shadow-lg transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            {/* Labels */}
            <div className="absolute top-4 left-4 text-white font-semibold bg-black/50 px-2 py-1 rounded">
              Before
            </div>
            <div className="absolute top-4 right-4 text-white font-semibold bg-black/50 px-2 py-1 rounded">
              After
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;