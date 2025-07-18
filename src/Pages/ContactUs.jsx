import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-8 px-6 py-12">
        {/* Contact Form Section */}
        <div className="text-gray-800 order-2 md:order-1 w-full max-w-xl mx-auto px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Contact <span className="text-cyan-600">Us</span>
          </h1>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            Have questions or need help growing your business? We’re just a message away.
          </p>

          <form className="space-y-3 sm:space-y-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-full sm:w-auto bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-800 hover:text-white py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="src/assets/contactUs.jpg"
            alt="Contact Us"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
