import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/admin" className="text-xl font-bold text-gray-800 dark:text-white">
              Admin Panel
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/admin/users" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              Users
            </Link>
            <Link 
              to="/admin/content" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              Content
            </Link>
            <Link 
              to="/" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              View Site
            </Link>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;