import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ imgSrc, imgAlt, title, description, button, link, }) => {
  return (
    <div
      className='rounded-xl bg-white shadow-md transition duration-300 hover:shadow-lg hover:scale-110'
      style={{ willChange: 'transform, opacity' }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className='h-52 w-full object-cover'
        loading='lazy'
      />
      <div className='p-4 bg-cyan-50 border border-cyan-700 rounded-b-xl'>
        <h2 className='mb-2 text-lg font-semibold text-gray-800 md:text-xl'>
          {title}
        </h2>
        <p className='mb-4 text-sm text-gray-600'>{description}</p>

        {link ? (
          <Link
            to={link}
            className='inline-block rounded bg-cyan-600 px-4 py-2 text-sm text-white transition duration-200 hover:bg-transparent hover:text-cyan-700 border border-cyan-700'
          >
            {button}
          </Link>
        ) : (
          <button
            className='cursor-pointer rounded bg-cyan-600 px-4 py-2 text-sm text-white transition duration-200 hover:bg-cyan-700'
            type="button"
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
