import React from "react";

const HomeDB = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-8 px-6 py-12">
        {/* Text Section */}
        <div className="text-gray-800 order-2 md:order-1 motion-preset-fade-lg motion-preset-blur-left-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="motion-preset-slide-down-left-lg">
              Welcome To <span className="text-cyan-600">NEXA</span>
            </span>{" "}
            <br />
            Grow Your Business with Expert Digital Marketing
          </h1>
          <p className="mb-6 text-base sm:text-lg">
            We help brands in Lahore and beyond reach the right audience with
            SEO, social media, and paid ads that deliver real results.
            <span className="block mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
              Our solutions are tailored for startups, SMEs, and enterprises.
              <span className="hidden sm:inline">
                {" "}
                We focus on measurable growth and ROI, ensuring your business
                thrives in today’s digital landscape.
              </span>
            </span>
          </p>
          <button className="btn bg-transparent text-gray-700 border-gray-700 hover:bg-gray-800 hover:text-white">
            Get Free Consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 md:order-2 sm:order-3 -motion-translate-x-in-100 motion-translate-y-in-75 motion-ease">
          <img
            src="src/assets/DB2.jpg"
            alt="Marketing"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDB;
