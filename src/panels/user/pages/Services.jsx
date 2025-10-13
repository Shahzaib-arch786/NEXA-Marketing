import React from 'react';
import Cards from '../../../shared/components/Cards';

const Services = () => {
  return (
    <div className='bg-white px-4 py-6' id='Services'>
      <h1 className='mb-4 text-center text-3xl font-bold text-gray-700 md:text-4xl'>
        Our <span className='text-cyan-600'>Services</span>
      </h1>
      <h3 className='mx-2 mb-2 text-center text-xl text-gray-700 md:mx-10 md:text-2xl'>
        Tailored Digital Solutions to Grow Your Business Online
      </h3>
      <p className='mb-4 px-2 text-center text-gray-700 md:px-0'>
        We offer a full range of digital marketing services designed to boost
        your visibility, drive traffic, and increase conversions.
      </p>
      <div className='grid grid-cols-1 gap-6 pt-5 sm:grid-cols-2 lg:grid-cols-3'>
        <Cards
          imgSrc='src/shared/assets/pageManagement.webp'
          imgAlt='Page Creation and Management Services'
          title='Page Creation & Management'
          description='We create and manage your web pages to ensure a seamless online presence.'
          button='Learn More'
          link='PageManagement'
        />
        <Cards
          imgSrc='src/shared/assets/adsCamp.webp'
          imgAlt='Ad Campaign Creation & Management Services'
          title='Ad Campaign Creation & Management'
          description='We design and manage effective ad campaigns to boost your online
            visibility.'
          button='Learn More'
          link='AdCampaignManagement'
        />
        <Cards
          imgSrc='src/shared/assets/followers.webp'
          imgAlt='Followers Boosting Services'
          title='Followers Boosting'
          description='We help increase your social media followers through targeted
            strategies.'
          button='Learn More'
          link='FollowersBoosting'
        />
        <Cards
          imgSrc='src/shared/assets/professional post.webp'
          imgAlt='Professional Post Design Services'
          title='Professional Post Design'
          description=' We create visually appealing and engaging posts for your social
            media.'
          button='Learn More'
          link='PostDesign'
        />
        <Cards
          imgSrc='src/shared/assets/social media.webp'
          imgAlt='Social Media Strategy Services'
          title='Social Media Strategy'
          description='We develop tailored social media strategies to enhance your brand
            presence.'
          button='Learn More'
          link='SMMS'
        />
        <Cards
          imgSrc='src/shared/assets/analytics.webp'
          imgAlt='Analytics & Reporting Services'
          title='Analytics & Reporting'
          description=' We provide in-depth analytics and reporting to track your social
            media performance.'
          button='Learn More'
          link='AnalyticsReporting'
        />
      </div>
    </div>
  );
};

export default Services;
