import React from 'react';
import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';

const UserLayout = ({ children, darkMode, setDarkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;