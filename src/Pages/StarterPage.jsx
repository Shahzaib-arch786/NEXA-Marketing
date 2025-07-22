import React from 'react';
import Footer from '../Components/Footer';
import starterPlan from '../assets/starterPlan.jpg';


const StarterPage = () => {
  return (
    <div>
      <div
        className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat z-10'
        style={{ backgroundImage: `url(${starterPlan})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-0 max-w-3xl px-6 text-center text-white'>
          <h1 className='mb-6 text-5xl font-bold'>Starter Plan</h1>
          <p className='mb-6 text-lg'>
            Perfect for individuals, startups, or small businesses looking to kickstart their social media presence with essential growth tools and support.
          </p>
          <button className='btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105'>
            Start Your Plan Now!
          </button>
        </div>
      </div>

      <section className='bg-white px-6 py-16 lg:px-20'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-10 text-center text-4xl font-bold'>
            Starter Plan <span className='text-cyan-600'>Includes</span>
          </h2>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Basic Organic Growth</h3>
              <p>
                Attract real, relevant followers using proven organic strategies tailored for new accounts.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Profile Optimization</h3>
              <p>
                We help you set up and optimize your profile for maximum visibility and engagement.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Content Guidance</h3>
              <p>
                Receive tips and recommendations for content themes, posting times, and hashtags to boost reach.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Monthly Progress Report</h3>
              <p>
                Get a simple monthly report tracking your follower growth and engagement stats.
              </p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              Why Choose the <span className='text-cyan-600'>Starter Plan?</span>
            </h3>
            <p className='mx-auto max-w-3xl text-lg'>
              The Starter Plan is designed to give you the essential tools and support to begin growing your audience, build credibility, and lay the foundation for future success.
            </p>
            <button className='btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700'>
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StarterPage;

 