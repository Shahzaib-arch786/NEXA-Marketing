import React from 'react';

const WhyUs = () => {
  return (
    <div className="bg-white px-4 py-6">
      <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-950 mb-6 md:mb-10">
        Why Choose Us As Your{' '}
        <span className="text-cyan-600">Digital media</span> Partner In
        Pakistan!
      </h1>
      <div className="hero min-h-[60vh] md:min-h-screen flex items-center">
        <div className="hero-content flex flex-col lg:flex-row gap-6 md:gap-10 w-full">
          <img
            src="src/assets/character1.jpg"
            className="w-full max-w-xs md:max-w-sm rounded-lg mx-auto"
            alt="Character"
          />
          <div className="w-full">
            <h1 className="text-xl md:text-3xl font-bold text-gray-700 mb-3 md:mb-4">
              Why <span className="text-cyan-600">We Are Different</span> From
              Others ?
            </h1>
            <ul className="list-inside pl-2 md:pl-5 text-gray-700 mb-2 text-justify mr-0 md:mr-10">
              <li className="mb-2">
                <span className="font-bold">Local Expertise - </span>We understand
                the local market dynamics and cultural nuances of Lahore,
                allowing us to create campaigns that resonate with your target
                audience.
              </li>
              <li className="mb-2">
                <span className="font-bold">Data-Driven Approach - </span>We
                leverage data analytics to inform our strategies, ensuring that
                every decision is backed by insights and metrics. No guesswork.
                Every decision is backed by analytics, research, and real-time
                performance tracking to ensure maximum ROI.
              </li>
              <li className="mb-2">
                <span className="font-bold">Customized Strategies - </span>We don’t
                do cookie-cutter campaigns. Every brand is unique, and so is our
                approach — tailored to your business goals and industry needs.
              </li>
              <li className="mb-2">
                <span className="font-bold">Full-Service Solutions - </span>We offer
                a comprehensive suite of services, from strategy development to
                execution and monitoring, ensuring a seamless experience for our
                clients. From SEO, PPC, and social media to content marketing
                and branding — everything under one roof to grow your digital
                presence.
              </li>
              <li className="mb-2">
                <span className="font-bold">Proven Track Record - </span>We have a
                history of delivering successful campaigns and measurable
                results for our clients in Lahore And also other cities. We’ve
                helped startups and established businesses in Lahore scale
                online with measurable success. Our results speak for
                themselves.
              </li>
              <li className="mb-2">
                <span className="font-bold">Transparent Communication - </span>We
                believe in open and honest communication, keeping you informed
                at every step of the process. We keep you in the loop with
                regular updates, reports, and insights into your campaign’s
                performance. No jargon, no hidden metrics. You’ll always know
                what we’re doing, why we’re doing it, and how it’s helping your
                business.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
