import React from 'react';

const plans = [
  {
    title: 'Starter',
    price: '$ 49.99',
    features: [
      'Basic SEO Setup',
      '1 Social Media Platform',
      'Monthly Reporting',
      'Email Support',
    ],
  },
  {
    title: 'Professional',
    price: '$ 99.99',
    features: [
      'Advanced SEO Optimization',
      '3 Social Media Platforms',
      'Weekly Reports',
      'Ad Campaign Management',
      'Priority Support',
    ],
    popular: true,
  },
  {
    title: 'Enterprise',
    price: '$ 199.99',
    features: [
      'Complete Digital Strategy',
      'All Social Media Platforms',
      'Daily Reporting & Insights',
      'Dedicated Account Manager',
      '24/7 Premium Support',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Choose Your <span className="text-cyan-600">Plan</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Affordable pricing to grow your business with expert digital marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-8 border transition-all duration-300 ${
              plan.popular
                ? 'bg-cyan-600 text-white border-cyan-600 scale-105'
                : 'bg-white text-gray-800 border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-yellow-300">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-green-500 text-lg">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 px-4 rounded-lg font-semibold ${
                plan.popular
                  ? 'bg-white text-cyan-600 hover:bg-gray-100'
                  : 'bg-cyan-600 text-white hover:bg-cyan-700'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
