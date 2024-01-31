import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/entry/Login/LoginPage';
import Signup from './components/entry/Signup/Signup';
import MyFooter from './components/Footer/Footer';
import Profile from './components/Profile/Profile'
import './App.css';

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;