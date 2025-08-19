import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Publication from './components/Publication';
import PublicationDetail from './components/PublicationDetail';
import CarbonCalculator from './components/CarbonCalculator';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import DashboardHome from './components/DashboardHome';
import Profile from './components/Profile';
import Settings from './components/Settings';
import RegistrationForm from './components/RegistrationForm';  // ✅ Added
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/publication/:slug" element={<PublicationDetail />} />
        <Route path="/carbon-calculator" element={<CarbonCalculator />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/register"
          element={
            <div>
              <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                 GreenZen - Registration
              </h1>
              <RegistrationForm />
            </div>
          }
        />

        <Route path="/dashboard" element={<Dashboard name="John" />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
