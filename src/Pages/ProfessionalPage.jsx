import React from 'react';
import Footer from '../Components/Footer';
import premiumPlan from '../assets/premiumPlan.webp'

const ProfessionalPage = () => {
  return (
    <div>
      <div
        className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat z-10'
        style={{ backgroundImage: `url(${premiumPlan})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-0 max-w-3xl px-6 text-center text-white'>
          <h1 className='mb-6 text-5xl font-bold'>Professional Plan</h1>
          <p className='mb-6 text-lg'>
            Ideal for growing businesses and influencers who want advanced tools, expert strategies, and consistent growth on social media platforms.
          </p>
          <button className='btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105'>
            Upgrade to Professional!
          </button>
        </div>
      </div>

      <section className='bg-white px-6 py-16 lg:px-20'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-10 text-center text-4xl font-bold'>
            Professional Plan <span className='text-cyan-600'>Includes</span>
          </h2>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Advanced Growth Strategies</h3>
              <p>Leverage data-driven techniques and targeted growth campaigns to attract high-value followers.</p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Custom Content Calendar</h3>
              <p>A monthly posting plan tailored to your niche and audience for better consistency and performance.</p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Hashtag & Caption Support</h3>
              <p>Get curated hashtag sets and engaging captions that improve reach and interaction.</p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Bi-Weekly Performance Reports</h3>
              <p>Track progress and insights with detailed analytics every two weeks.</p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              Why Choose the <span className='text-cyan-600'>Professional Plan?</span>
            </h3>
            <p className='mx-auto max-w-3xl text-lg'>
              The Professional Plan offers a well-rounded strategy with expert assistance, designed for those who are serious about turning social presence into business success.
            </p>
            <button className='btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700'>
              Go Professional Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalPage;
