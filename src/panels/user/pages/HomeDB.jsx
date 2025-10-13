import React from 'react';
import Orb from '../../../shared/components/ORB';
import ScrollVelocity from '../../../shared/components/Scrollingtext';

const velocity = 2; // Set your desired scroll velocity

const HomeDB = () => {
  return (
    <div
      className='pointer-events-auto relative z-0 overflow-hidden bg-gray-900'
      id='Home'
    >
      {/* Orb background */}
      <div className='absolute inset-0 -z-10'>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={true}
        />
      </div>

      {/* Main content */}
      <div className='relative z-10 mt-6 flex min-h-screen flex-wrap items-center gap-8 px-6 py-24 text-center'>
        {/* Text Section */}
        <div className='motion-preset-focus-lg order-2 text-white md:order-1'>
          <h1 className='mb-6 text-3xl font-bold sm:justify-center sm:text-4xl lg:text-5xl'>
            <span className='motion-preset-slide-down-left-lg'>
              Welcome To{' '}
              <span className='animate-pulse text-6xl text-cyan-400'>
                <br />
                NEXA
              </span>
            </span>
            <br />
            Grow Your Business with Expert Digital Marketing
          </h1>
          <p className='mb-6 text-base sm:text-lg'>
            We help brands in Lahore and beyond reach the right audience with
            SEO, social media, and paid ads that deliver real results.
            <span className='mt-2 block text-sm sm:text-base md:text-lg lg:text-xl'>
              Our solutions are tailored for startups, SMEs, and enterprises.
              <span className='hidden sm:inline'>
                {' '}
                We focus on measurable growth and ROI, ensuring your business
                thrives in today’s digital landscape.
              </span>
            </span>
          </p>
          <a
            href='#Contact'
            className='btn border-indigo-700 bg-transparent text-white hover:bg-gray-800 hover:text-white'
          >
            Get Free Consultation
          </a>
        </div>

        {/* Image Section */}
        {/* <div className='order-1 flex justify-center sm:order-3 md:order-2'>
          <img
            src='src/shared/assets/DB2.webp'
            alt='Marketing'
            loading='lazy'
            className='w-full max-w-md rounded-2xl shadow-lg md:max-w-lg'
          />
        </div> */}
      </div>
     
    </div>
    
  );
};

export default HomeDB;
