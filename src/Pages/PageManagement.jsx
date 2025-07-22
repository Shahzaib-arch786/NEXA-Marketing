import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PageManagement = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('src/assets/pageManagement.jpg')" }}
      >
        <div className='bg-opacity-60 absolute inset-0 bg-black/50'></div>{' '}
        {/* Optional dark overlay */}
        <div className='relative z-0 max-w-3xl px-6 text-center text-white'>
          <h1 className='mb-6 text-5xl font-bold'>
            Page Creation & Management
          </h1>
          <p className='mb-6 text-lg'>
            We design, set up, and manage professional digital pages that
            reflect your brand, attract customers, and drive real business
            results.
          </p>
          <button className='btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105'>Get Started</button>
        </div>
      </div>

      <section className='bg-white px-6 py-16 lg:px-20'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-10 text-center text-4xl font-bold'>
            What <span className='text-cyan-600'>We Offer</span>
          </h2>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>
                Facebook & Instagram Page Creation
              </h3>
              <p>
                We create fully optimized social media pages with branded
                visuals, keyword-rich profiles, CTA buttons, and all essential
                business info configured for maximum visibility.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>
                Google Business Profile Setup
              </h3>
              <p>
                Get your business verified on Google with a complete profile
                setup including location, service categories, photos, and weekly
                posting for better local search presence.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>
                Landing Page Design
              </h3>
              <p>
                We design high-converting, mobile-friendly landing pages for
                lead generation, special offers, and campaigns — integrated with
                forms, tracking, and automation tools.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>
                Website Page Management
              </h3>
              <p>
                Already have a website? We’ll manage and update your pages
                regularly with fresh content, SEO optimization, and layout
                enhancements for a better user experience.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='mb-2 text-2xl font-semibold'>
                Page Growth & Community Management
              </h3>
              <p>
                Beyond setup, we manage your pages by posting engaging content,
                responding to messages, tracking insights, and helping you grow
                an active online community.
              </p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <h3 className='mb-4 text-3xl font-bold'>Why It <span className='text-cyan-600'>Matters</span> </h3>
            <p className='mx-auto max-w-3xl text-lg'>
              Your online pages are your digital storefront — we make sure they
              look professional, stay active, and work as powerful marketing
              tools to attract, engage, and convert.
            </p>
            <button className='btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700'>
              Request a Free Page Audit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PageManagement;
