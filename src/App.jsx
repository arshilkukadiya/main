import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import About from './pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  return (
      
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};





export default App;
