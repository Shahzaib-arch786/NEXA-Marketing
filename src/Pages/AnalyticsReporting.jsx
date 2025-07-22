import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AnalyticsReporting = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/analytics.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 bg-opacity-60"></div>
        <div className="relative z-0 max-w-3xl px-6 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold">Analytics & Reporting</h1>
          <p className="mb-6 text-lg">
            We provide in-depth insights, visual reports, and strategic analysis to help you track performance, measure ROI, and make smarter marketing decisions.
          </p>
          <button className="btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105">Get a Free Report</button>
        </div>
      </div>

      <section className="bg-white px-6 py-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            What <span className="text-cyan-600">We Offer</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="mb-2 text-2xl font-semibold">
                Social Media Insights
              </h3>
              <p>
                Get detailed reports on your Facebook, Instagram, LinkedIn, and Twitter performance including engagement, reach, impressions, followers, and post trends.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="mb-2 text-2xl font-semibold">
                Google Analytics Reports
              </h3>
              <p>
                We help you track website visitors, user behavior, traffic sources, conversions, bounce rates, and more to optimize performance and improve ROI.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="mb-2 text-2xl font-semibold">
                Custom Dashboards
              </h3>
              <p>
                Access real-time dashboards customized for your business goals using tools like Google Data Studio, Looker Studio, or third-party integrations.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="mb-2 text-2xl font-semibold">
                Campaign Performance Reports
              </h3>
              <p>
                Get post-campaign analysis with breakdowns of ad performance, spend, click-through rate (CTR), engagement, and conversions.
              </p>
            </div>

            <div className="bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200">
              <h3 className="mb-2 text-2xl font-semibold">
                Strategic Recommendations
              </h3>
              <p>
                We don’t just report numbers — we interpret them to give actionable insights and improvement plans for your ongoing campaigns and overall strategy.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="mb-4 text-3xl font-bold">
              Why <span className="text-cyan-600">Analytics Matter</span>
            </h3>
            <p className="mx-auto max-w-3xl text-lg">
              Without clear data, you’re guessing. Our analytics services help you understand what’s working, where to improve, and how to get better results from every campaign.
            </p>
            <button className="btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700">
              Request Your Report
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalyticsReporting;
