import React from "react";
import { House, Cpu, BellRing, CircleUser } from "lucide-react";

const Navbar = (darkMode, setDarkMode) => {
  

  return (
    <div>
      <div className="navbar bg-white text-gray-700 shadow-sm fixed z-10 w-full">
        <div className="navbar-start">
          {/* Mobile menu button */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a>Our services</a>
                <ul className="p-2">
                  <li>
                    <a>Search Engine Optimization</a>
                  </li>
                  <li>
                    <a>Brand Marketing</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl hover:bg-gray-700">Nexa</a>
        </div>
        {/* Desktop & Tablet menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                href=""
                className="hover:text-gray-900 hover:bg-cyan-100 rounded-4xl gap-1 flex items-center"
              >
                <House color="grey" size={18} />
                <span className="hidden sm:inline">Home</span>
              </a>
            </li>
            <li>
              <details>
                <summary className="hover:text-gray-900 hover:bg-cyan-100 rounded-4xl gap-1 flex items-center">
                  <Cpu color="grey" size={18} />
                  <span className="hidden sm:inline">Our Services</span>
                </summary>
                <ul className="p-4 bg-white">
                  <li>
                    <a href="">Search Engine Optimization</a>
                  </li>
                  <li>
                    <a href="">Brand Marketing</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href=""
                className="hover:text-gray-900 hover:bg-cyan-100 rounded-4xl gap-1 flex items-center"
              >
                <BellRing color="grey" size={18} />
                <span className="hidden sm:inline">About Us</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-gray-900 hover:bg-cyan-100 rounded-4xl gap-1 flex items-center"
              >
                <CircleUser color="grey" size={18} />
                <span className="hidden sm:inline">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <a className="btn bg-transparent border text-gray-700 border-gray-600 hover:bg-gray-800 transition duration-300 hover:text-white text-xs md:text-base px-2 md:px-4">
            Book a free call
          </a>
          <div className="p-2">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={(e) => {
                  document.documentElement.setAttribute(
                    "data-theme",
                    e.target.checked ? "synthwave" : "light"
                  );
                  localStorage.setItem(
                    "theme",
                    e.target.checked ? "synthwave" : "light"
                  );
                }}
                defaultChecked={localStorage.getItem("theme") === "synthwave"}
              />
              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke="currentColor" strokeWidth="2" fill="none">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </g>
              </svg>
              <svg
                className="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
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
