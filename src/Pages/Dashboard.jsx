import React from 'react';
import Navbar from '../Components/Navbar';
import HomeDB from './HomeDB';
import Footer from '../Components/Footer';
import WhyUs from './WhyUs';
import OurCommit from './OurCommit';
import Services from './Services';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Pricing from './PricingPage';

const Dashboard = ({darkMode, setDarkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HomeDB />
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
