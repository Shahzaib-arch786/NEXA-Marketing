import React from 'react';

const EnterprisePage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-cyan-600">Enterprise Plan</h1>
        <p className="mb-4">
          Tailored for large businesses looking for full-scale digital marketing domination.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Complete Digital Marketing Strategy + Consulting</li>
          <li>All Major Social Media Platforms Managed</li>
          <li>Daily Reporting, Custom Dashboards, and Real-Time Insights</li>
          <li>Dedicated Account Manager</li>
          <li>24/7 Premium Support with call & chat</li>
        </ul>
      </div>
    </div>
  );
};

export default EnterprisePage;
