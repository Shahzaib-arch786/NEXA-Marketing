import React from 'react';
import AdminNavbar from './AdminNavbar';

const AdminLayout = ({ children, darkMode, setDarkMode }) => {
  return (
    <div>
      <AdminNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </div>
  );
};

export default AdminLayout;