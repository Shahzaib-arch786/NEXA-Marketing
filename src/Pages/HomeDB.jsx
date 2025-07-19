import React from 'react';

const HomeDB = () => {
  return (
    <div className='bg-white' id='Home'>
      <div className='grid min-h-screen grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2'>
        {/* Text Section */}
        <div className='motion-preset-focus-lg order-2 text-gray-800 md:order-1'>
          <h1 className='mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
            <span className='motion-preset-slide-down-left-lg'>
              Welcome To <span className='text-cyan-600'>NEXA</span>
            </span>{' '}
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
            className='btn border-gray-700 bg-transparent text-gray-700 hover:bg-gray-800 hover:text-white'
          >
            Get Free Consultation
          </a>
        </div>

        {/* Image Section */}
        <div className='-motion-translate-x-in-100 motion-translate-y-in-75 motion-ease order-1 flex justify-center sm:order-3 md:order-2'>
          <img
            src='src/assets/DB2.jpg'
            alt='Marketing'
            loading='lazy'
            className='w-full max-w-md rounded-2xl shadow-lg md:max-w-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDB;
