import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import TopDailyDeals from './pages/TopDailyDeals';
import AboutUs from './pages/AboutUs';
import Disclaimer from './pages/Disclaimer';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-deals" element={<TopDailyDeals />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Layout>
  );
};

export default App;