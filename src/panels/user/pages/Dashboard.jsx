import React from 'react';
import Navbar from '../../../shared/components/Navbar';
import HomeDB from './HomeDB';
import Footer from '../../../shared/components/Footer';
import WhyUs from './WhyUs';
import OurCommit from './OurCommit';
import Services from './Services';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Pricing from './PricingPage';
import Scrolling from './Scrolling';

const Dashboard = ({darkMode, setDarkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HomeDB />
      <Scrolling/>
      <WhyUs/>
      <OurCommit/>
      <AboutUs/>
      <Services/>
      <Pricing/>
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Dashboard;
