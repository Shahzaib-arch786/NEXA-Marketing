import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// User Panel Components
import Dashboard from './panels/user/pages/Dashboard';
import AdCampaignManagement from './panels/user/pages/AdCampaignManagement';
import PageManagement from './panels/user/pages/PageManagement';
import FollowersBoosting from './panels/user/pages/FollowersBoosting';
import PostDesign from './panels/user/pages/PostDesign';
import SMMStrategies from './panels/user/pages/SMMStratgies';
import AnalyticsReporting from './panels/user/pages/AnalyticsReporting';
import StarterPage from './panels/user/pages/StarterPage';
import ProfessionalPage from './panels/user/pages/ProfessionalPage';
import EnterprisePage from './panels/user/pages/EnterprisePage';

// Admin Panel Components
import AdminDashboard from './panels/admin/pages/AdminDashboard';
import UserManagement from './panels/admin/pages/UserManagement';
import ContentManagement from './panels/admin/pages/ContentManagement';
import AdminLayout from './panels/admin/components/AdminLayout';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <>
      <Router>
        <Routes>
          {/* User Panel Routes */}
          <Route
            path='/'
            element={
              <Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />
          <Route path='/PageManagement' element={<PageManagement />} />
          <Route
            path='/AdCampaignManagement'
            element={<AdCampaignManagement />}
          />
          <Route path='/FollowersBoosting' element={<FollowersBoosting />} />
          <Route path='/PostDesign' element={<PostDesign />} />
          <Route path='/SMMS' element={<SMMStrategies />} />
          <Route path='/AnalyticsReporting' element={<AnalyticsReporting />} />
          <Route path='/pricing/starter' element={<StarterPage />} />
          <Route path='/pricing/professional' element={<ProfessionalPage />} />
          <Route path='/pricing/enterprise' element={<EnterprisePage />} />

          {/* Admin Panel Routes */}
          <Route
            path='/admin'
            element={
              <AdminLayout darkMode={darkMode} setDarkMode={setDarkMode}>
                <AdminDashboard />
              </AdminLayout>
            }
          />
          <Route
            path='/admin/users'
            element={
              <AdminLayout darkMode={darkMode} setDarkMode={setDarkMode}>
                <UserManagement />
              </AdminLayout>
            }
          />
          <Route
            path='/admin/content'
            element={
              <AdminLayout darkMode={darkMode} setDarkMode={setDarkMode}>
                <ContentManagement />
              </AdminLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
