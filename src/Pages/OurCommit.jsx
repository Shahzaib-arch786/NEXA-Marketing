import React, { Component } from 'react';
import Button from '../Components/Button';

const OurCommit = () => {
  return (
    <div className="bg-white">
      <h1 className="text-4xl md:text-5xl text-center text-gray-700 font-bold pt-10">
        Our <span className="text-cyan-600">Commitment</span>
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center lg:items-start px-4 md:px-8">
          <img
            src="src/assets/commitment.jpg"
            className="w-full max-w-xs md:max-w-sm rounded-lg mb-6 lg:mb-0 lg:mr-10"
            alt="Commitment"
          />
          <div className="w-full lg:w-auto lg:ml-10 lg:mr-20">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700">Commitment With You</h1>
            <p className="mt-4 text-gray-700 text-justify mb-5 text-base md:text-lg">
              We are committed to delivering exceptional results for our
              clients. Our team of experts combines creativity with technical
              expertise to drive impactful marketing solutions. Whether you are
              a small business or a large enterprise, we have the skills and
              experience to help you achieve your marketing goals.
              <br />
              <span className="font-bold">Contact us today</span> to learn more
              about how we can help you grow your business in Lahore and beyond.
              <br />
              <span className="text-cyan-600 font-bold">Let’s work together!</span>
              <br />
            </p>
            <Button btnText="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommit;
