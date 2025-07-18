import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-8 px-6 py-12">
        {/* Text Section */}
        <div className="text-gray-800 order-2 md:order-1 w-full max-w-xl mx-auto px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left">
            About <span className="text-cyan-600">NEXA</span>
          </h1>
          <p className="mb-4 text-base sm:text-lg leading-relaxed text-center md:text-left">
            At <span className="font-semibold">NEXA</span>, we are passionate
            about helping businesses in Lahore and beyond grow through strategic
            and data-driven digital marketing.
          </p>
          <p className="mb-4 text-base sm:text-lg leading-relaxed text-center md:text-left">
            With a team of experienced marketers, designers, and developers, we
            create tailored campaigns that connect with the right audience and
            drive measurable results.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Whether it's SEO, paid ads, social media marketing, or content
            strategy, we work closely with our clients to bring their vision to
            life and maximize their online presence.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="src/assets/together.jpg"
            alt="About Us"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
