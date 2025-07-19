import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PostDesign = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('src/assets/professional post.jpg')" }} // Replace with your actual image
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-0 max-w-3xl px-6 text-center text-white'>
          <h1 className='mb-6 text-5xl font-bold'>Professional Post Design</h1>
          <p className='mb-6 text-lg'>
            We design high-impact, branded social media posts that grab attention, reflect your identity, and drive engagement across all platforms.
          </p>
          <button className='btn hover:bg-transparent hover:text-white transition duration-300 hover:scale-105'>
            Request a Design
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
              <h3 className='text-2xl font-semibold mb-2'>Branded Social Media Posts</h3>
              <p>
                Posts designed to match your brand colors, fonts, and tone — helping your business stay consistent and recognizable across all platforms.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Event & Promo Graphics</h3>
              <p>
                Launching a sale or event? We design promotional posts and banners that get people excited and ready to engage or take action.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Story, Reel & Vertical Designs</h3>
              <p>
                Vertical formats for Instagram/Facebook stories, reels, and TikToks that are visually optimized for mobile attention.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Infographic & Carousel Posts</h3>
              <p>
                Educational and visually appealing posts that tell a story or explain a concept — perfect for carousel engagement.
              </p>
            </div>

            <div className='bg-base-100 rounded-lg border p-6 shadow-sm hover:scale-105 transition duration-200'>
              <h3 className='text-2xl font-semibold mb-2'>Monthly Design Packages</h3>
              <p>
                Need regular content? Choose from flexible monthly packages with custom graphics delivered on time and ready to post.
              </p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              Why <span className='text-cyan-600'>Design Matters</span>
            </h3>
            <p className='mx-auto max-w-3xl text-lg'>
              Professional post design isn’t just about looks — it builds trust, increases brand recognition, and drives more clicks, shares, and conversations.
            </p>
            <button className='btn bg-cyan-500 mt-8 text-lg text-white hover:bg-cyan-700'>
              View Portfolio or Get Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PostDesign;
