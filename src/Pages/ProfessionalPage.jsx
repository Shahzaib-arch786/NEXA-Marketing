import React from 'react';

const ProfessionalPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-cyan-600">Professional Plan</h1>
        <p className="mb-4">
          Great for growing brands needing a more aggressive and multi-platform strategy.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Advanced SEO Optimization for higher ranking</li>
          <li>Management of 3 Social Media Platforms</li>
          <li>Weekly Reports with campaign insights</li>
          <li>Ad Campaign Management on Meta and Google</li>
          <li>Priority Support with quicker response time</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalPage;
