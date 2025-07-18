import React from "react";
import Cards from "../Components/Cards";

const Services = () => {
  return (
    <div className="bg-white px-4 py-6">
      <h1 className="text-3xl md:text-4xl text-center text-gray-700 font-bold mb-4">
        Our <span className="text-cyan-600">Services</span>
      </h1>
      <h3 className="text-gray-700 mx-2 md:mx-10 text-xl md:text-2xl text-center mb-2">
        Tailored Digital Solutions to Grow Your Business Online
      </h3>
      <p className="text-gray-700 text-center mb-4 px-2 md:px-0">
        We offer a full range of digital marketing services designed to boost
        your visibility, drive traffic, and increase conversions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
        <Cards
          imgSrc="src/assets/pageManagement.jpg"
          imgAlt="Page Creation and Management Services"
          title="Page Creation & Management"
          description="We create and manage your web pages to ensure a seamless online presence."
          button="Learn More"
          link=""
        />
        <Cards
          imgSrc="src/assets/adsCamp.jpg"
          imgAlt="Ad Campaign Creation & Management Services"
          title="Ad Campaign Creation & Management"
          description="We design and manage effective ad campaigns to boost your online
            visibility."
          button="Learn More"
          link=""
        />
        <Cards
          imgSrc="src/assets/followers.jpg"
          imgAlt="Followers Boosting Services"
          title="Followers Boosting"
          description="We help increase your social media followers through targeted
            strategies."
          button="Learn More"
          link=""
        />
        <Cards
          imgSrc="src/assets/professional post.jpg"
          imgAlt="Professional Post Design Services"
          title="Professional Post Design"
          description=" We create visually appealing and engaging posts for your social
            media."
          button="Learn More"
          link=""
        />
        <Cards
          imgSrc="src/assets/social media.jpg"
          imgAlt="Social Media Strategy Services"
          title="Social Media Strategy"
          description="We develop tailored social media strategies to enhance your brand
            presence."
          button="Learn More"
          link=""
        />
        <Cards
          imgSrc="src/assets/analytics.jpg"
          imgAlt="Analytics & Reporting Services"
          title="Analytics & Reporting"
          description=" We provide in-depth analytics and reporting to track your social
            media performance."
          button="Learn More"
          link=""
        />
      </div>
    </div>
  );
};

export default Services;
