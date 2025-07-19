import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AdCampaignManagement = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('src/assets/adsCamp.jpg')" }} // Replace with actual image path
      >
        <div className='bg-opacity-60 absolute inset-0 bg-black/50'></div>
        <div className='relative z-0 max-w-3xl px-6 text-center text-white'>
          <h1 className='mb-6 text-5xl font-bold'>Ad Campaign Creation & Management</h1>
          <p className='mb-6 text-lg'>
            We plan, launch, and manage powerful ad campaigns across Google, Facebook, Instagram, and more — all optimized for ROI and business growth.
          </p>
          <button className='btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105'>
            Launch Your Campaign
          </button>
        </div>
      </div>

      <section className='bg-white px-6 py-16 lg:px-20'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-10 text-center text-4xl font-bold'>
            What <span className='text-cyan-600'>We Offer</span>
          </h2>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>Google Ads Management</h3>
              <p>
                We create and manage high-converting Google Search and Display Ads to bring targeted traffic and maximize your return on investment.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>Facebook & Instagram Ads</h3>
              <p>
                From story ads to carousel posts, we design creative, scroll-stopping ads that connect with your audience and generate qualified leads.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>Campaign Strategy & Targeting</h3>
              <p>
                We define clear goals, target the right audience, and choose the best platforms to make every rupee of your ad budget work smarter.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>A/B Testing & Optimization</h3>
              <p>
                We continuously test and tweak ad creatives, headlines, and targeting to improve CTR, reduce CPC, and maximize conversions.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>Real-Time Analytics & Reporting</h3>
              <p>
                Track performance with transparent analytics and easy-to-understand reports so you always know where your money is going.
              </p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <h3 className='mb-4 text-3xl font-bold'>
              Why It <span className='text-cyan-600'>Matters</span>
            </h3>
            <p className='mx-auto max-w-3xl text-lg'>
              A well-executed ad campaign can transform your business. We ensure every campaign is backed by strategy, driven by data, and focused on results.
            </p>
            <button className='btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700'>
              Start Your Campaign Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdCampaignManagement;
