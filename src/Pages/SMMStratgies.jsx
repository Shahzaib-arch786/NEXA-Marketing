import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const SMMStrategies = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/social media.jpg')" }} // Replace with your image
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-0 max-w-3xl px-6 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold">Social Media Marketing Strategies</h1>
          <p className="mb-6 text-lg">
            Unlock the full potential of your brand online. Our custom SMM strategies build awareness, drive engagement, and convert audiences into loyal customers.
          </p>
          <button className="btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105">
            Start Your Strategy
          </button>
        </div>
      </div>

      {/* Strategy Details Section */}
      <section className="bg-white px-6 py-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            What Makes Our <span className="text-cyan-600">Strategies Work?</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="text-2xl font-semibold mb-2">Platform-Specific Plans</h3>
              <p>
                Tailored strategies for Facebook, Instagram, LinkedIn, TikTok, and more — each platform has its own audience and tactics.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="text-2xl font-semibold mb-2">Content Calendar</h3>
              <p>
                Strategic posting schedules with a mix of educational, promotional, and engaging content that keeps your feed fresh and relevant.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="text-2xl font-semibold mb-2">Audience Targeting</h3>
              <p>
                We study your ideal customer and build content and ad campaigns that speak directly to their needs and interests.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="text-2xl font-semibold mb-2">Hashtag & Trend Strategy</h3>
              <p>
                We research top-performing hashtags and trends to expand your organic reach and stay relevant in real-time conversations.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="text-2xl font-semibold mb-2">Ad Integration</h3>
              <p>
                Combine organic strategies with smart paid campaigns for maximum growth and conversions.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="text-2xl font-semibold mb-2">Performance Reports</h3>
              <p>
                Monthly analytics to track your growth, see what’s working, and adjust your strategy accordingly.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Let’s <span className="text-cyan-600">Strategize Your Success</span>
            </h3>
            <p className="mx-auto max-w-3xl text-lg">
              We don’t just post. We plan. We test. We grow. Book a free consultation and we’ll craft a winning strategy tailored to your business.
            </p>
            <button className="btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700">
              Book Strategy Session
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SMMStrategies;
