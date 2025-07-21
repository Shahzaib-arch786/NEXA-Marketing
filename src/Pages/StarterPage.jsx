import React from 'react';

const StarterPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-cyan-600">Starter Plan</h1>
        <p className="mb-4">
          Ideal for small businesses or startups just beginning their digital journey.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Basic SEO Setup to increase your search engine visibility</li>
          <li>1 Social Media Platform (Facebook or Instagram)</li>
          <li>Monthly Reporting and Performance Tracking</li>
          <li>Email Support for queries and updates</li>
        </ul>
      </div>
    </div>
  );
};

export default StarterPage;
