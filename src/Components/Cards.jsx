import React from 'react';

const Cards = ({ imgSrc, imgAlt, title, description, button, link }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-cyan-50 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-sm my-5 border border-cyan-400 hover:transition duration-500 hover:scale-105">
        <figure className="overflow-hidden rounded-t-lg">
          <img src={imgSrc} alt={imgAlt} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-gray-600 text-lg md:text-xl">{title}</h2>
          <p className="text-gray-700 text-sm md:text-base">{description}</p>
          <div className="card-actions justify-start mt-4">
            <button
              onClick={link}
              className="btn btn-wide bg-gray-800 border border-gray-700 text-white hover:bg-transparent hover:text-gray-900"
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
