import './App.css';
import AdCampaignManagement from './Pages/AdCampaignManagement';
import Dashboard from './Pages/Dashboard';
import PageManagement from './Pages/PageManagement';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FollowersBoosting from './Pages/FollowersBoosting';
import PostDesign from './Pages/PostDesign';
import SMMStrategies from './Pages/SMMStratgies';
import AnalyticsReporting from './Pages/AnalyticsReporting';
import StarterPage from './Pages/StarterPage';
import ProfessionalPage from './Pages/ProfessionalPage';
import EnterprisePage from './Pages/EnterprisePage';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
