import React from 'react';
import { Link } from 'react-router-dom';
import {
  House,
  Cpu,
  BellRing,
  CircleUser,
  ChartNoAxesCombined,
} from 'lucide-react';
import PageManagement from '../Pages/PageManagement';
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <div className='navbar fixed z-10 w-full bg-white text-gray-700 shadow-sm'>
        <div className='navbar-start'>
          <div className='dropdown lg:hidden'>
            <div tabIndex={0} role='button' className='btn btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 bg-white p-2 shadow'
            >
              <li>
                <a href='#Home'>Home</a>
              </li>
              <li>
                <a href='#Services'>Our services</a>
                <ul className='p-2'>
                  <li>
                    <a>
                      <Cpu size={16} className='mr-2 inline' />
                      Search Engine Optimization
                    </a>
                  </li>
                  <li>
                    <a>
                      <BellRing size={16} className='mr-2 inline' />
                      Brand Marketing
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#AboutUs'>About Us</a>
              </li>
              <li>
                <a href='#ContactUs'>Contact Us</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-2xl hover:bg-gray-700'>Nexa</a>
        </div>

        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal gap-6 px-1 md:gap-8 lg:gap-12'>
            <li>
              <a
                href='#Home'
                className='flex items-center gap-1 rounded-4xl hover:bg-cyan-100 hover:text-gray-900'
              >
                <House color='grey' size={18} />
                <span className='hidden sm:inline'>Home</span>
              </a>
            </li>
            <li className='relative'>
              <details>
                <summary className='flex cursor-pointer items-center gap-1 rounded-4xl hover:bg-cyan-100 hover:text-gray-900'>
                  <Cpu color='grey' size={18} />
                  <span className='hidden sm:inline'>Our Services</span>
                </summary>
                <ul className='absolute left-0 z-20 mt-2 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-lg'>
                  <li>
                    <Link
                      to='PageManagement'
                      className='flex items-center rounded px-4 py-2 transition hover:bg-cyan-50 hover:text-cyan-700'
                    >
                      <ChartNoAxesCombined color='grey' size={14} />
                      Page Creation & Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='AdCampaignManagement'
                      className='flex items-center rounded px-4 py-2 transition hover:bg-cyan-50 hover:text-cyan-700'
                    >
                      <Cpu size={16} className='mr-2' />
                      Ad Campaign Creation & Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="FollowersBoosting"
                      className='flex items-center rounded px-4 py-2 transition hover:bg-cyan-50 hover:text-cyan-700'
                    >
                      <BellRing size={16} className='mr-2' />
                      Followers Boosting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="PostDesign"
                      className='flex items-center rounded px-4 py-2 transition hover:bg-cyan-50 hover:text-cyan-700'
                    >
                      <BellRing size={16} className='mr-2' />
                      Professional Post Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="SMMS"
                      className='flex items-center rounded px-4 py-2 transition hover:bg-cyan-50 hover:text-cyan-700'
                    >
                      <Cpu size={16} className='mr-2' />
                      Social Media Marketing & Strategies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="AnalyticsReporting"
                      className='flex items-center rounded px-4 py-2 transition hover:bg-cyan-50 hover:text-cyan-700'
                    >
                      <BellRing size={16} className='mr-2' />
                      Analytics & Reporting
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href='#AboutUs'
                className='flex items-center gap-1 rounded-4xl hover:bg-cyan-100 hover:text-gray-900'
              >
                <BellRing color='grey' size={18} />
                <span className='hidden sm:inline'>About Us</span>
              </a>
            </li>
            <li>
              <a
                href='#ContactUs'
                className='flex items-center gap-1 rounded-4xl hover:bg-cyan-100 hover:text-gray-900'
              >
                <CircleUser color='grey' size={18} />
                <span className='hidden sm:inline'>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='navbar-end flex items-center gap-2'>
          <a
            href='#Contact'
            className='btn border border-gray-600 bg-transparent px-2 text-xs text-gray-700 transition duration-300 hover:bg-gray-800 hover:text-white md:px-4 md:text-base'
          >
            Book a free call
          </a>
          <div className='p-2'>
            <label className='swap swap-rotate'>
              <input
                type='checkbox'
                onChange={e => {
                  document.documentElement.setAttribute(
                    'data-theme',
                    e.target.checked ? 'synthwave' : 'light'
                  );
                  localStorage.setItem(
                    'theme',
                    e.target.checked ? 'synthwave' : 'light'
                  );
                }}
                defaultChecked={localStorage.getItem('theme') === 'synthwave'}
              />
              <svg
                className='swap-on h-6 w-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <g stroke='currentColor' strokeWidth='2' fill='none'>
                  <circle cx='12' cy='12' r='4' />
                  <path d='M12 2v2' />
                  <path d='M12 20v2' />
                  <path d='m4.93 4.93 1.41 1.41' />
                  <path d='m17.66 17.66 1.41 1.41' />
                  <path d='M2 12h2' />
                  <path d='M20 12h2' />
                  <path d='m6.34 17.66-1.41 1.41' />
                  <path d='m19.07 4.93-1.41 1.41' />
                </g>
              </svg>
              <svg
                className='swap-off h-6 w-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <g stroke='currentColor' strokeWidth='2' fill='none'>
                  <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
                </g>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
