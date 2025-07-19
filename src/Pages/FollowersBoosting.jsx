import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FollowersBoosting = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('src/assets/followers.jpg')" }} // Replace with your image path
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-0 max-w-3xl px-6 text-center text-white'>
          <h1 className='mb-6 text-5xl font-bold'>Followers Boosting Services</h1>
          <p className='mb-6 text-lg'>
            Increase your social media presence with real, organic followers who engage with your content and grow your brand visibility.
          </p>
          <button className='btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105'>
            Boost My Followers
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
              <h3 className='text-2xl font-semibold mb-2'>Organic Growth Campaigns</h3>
              <p>
                We use targeted strategies to attract real followers who are genuinely interested in your brand — no bots, no fakes.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Influencer & Hashtag Marketing</h3>
              <p>
                Reach wider audiences using niche influencers, trending hashtags, and community interaction to drive followers organically.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Content Optimization</h3>
              <p>
                We audit and enhance your content for engagement — the right visuals, captions, and posting schedule to attract and retain followers.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Platform-Specific Strategies</h3>
              <p>
                Whether it’s Instagram, Facebook, or TikTok — we tailor your growth strategy to match the behavior of your target audience on each platform.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Progress Monitoring & Reporting</h3>
              <p>
                Get detailed performance reports to see your follower growth, engagement stats, and recommendations for continuous improvement.
              </p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              Why It <span className='text-cyan-600'>Matters</span>
            </h3>
            <p className='mx-auto max-w-3xl text-lg'>
              A growing and engaged follower base builds trust, expands your reach, and creates opportunities for sales, collaborations, and brand partnerships.
            </p>
            <button className='btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700'>
              Get a Free Growth Plan
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FollowersBoosting;
