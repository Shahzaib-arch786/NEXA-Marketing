import React from 'react';
import Footer from '../Components/Footer';
import enterprisePlan from '../assets/enterprisePlan.jpg'

const EnterprisePage = () => {
  return (
    <div>
      <div
        className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat z-10'
        style={{ backgroundImage: `url(${enterprisePlan})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-0 max-w-3xl px-6 text-center text-white'>
          <h1 className='mb-6 text-5xl font-bold'>Enterprise Plan</h1>
          <p className='mb-6 text-lg'>
            Tailored for agencies, large teams, and businesses that need complete social media management and high-impact results.
          </p>
          <button className='btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105'>
            Start Enterprise Plan
          </button>
        </div>
      </div>

      <section className='bg-white px-6 py-16 lg:px-20'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-10 text-center text-4xl font-bold'>
            Enterprise Plan <span className='text-cyan-600'>Includes</span>
          </h2>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Dedicated Account Manager</h3>
              <p>Work with a dedicated expert who handles your strategy, content, and reporting end-to-end.</p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Daily Content Scheduling</h3>
              <p>Our team creates, curates, and schedules posts daily across platforms based on trends and data.</p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Performance & Competitor Analysis</h3>
              <p>Deep insights into your metrics and competition to continually optimize your strategy.</p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>24/7 Support</h3>
              <p>Round-the-clock assistance for strategy changes, urgent edits, and campaign support.</p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              Why Go for the <span className='text-cyan-600'>Enterprise Plan?</span>
            </h3>
            <p className='mx-auto max-w-3xl text-lg'>
              Designed for large-scale operations, the Enterprise Plan guarantees complete management, high ROI, and hands-free execution with maximum results.
            </p>
            <button className='btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700'>
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;
