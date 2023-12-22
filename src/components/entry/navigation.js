import React, { useState } from 'react';
import './style.css';

function Navigation({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('login'); // State to track the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab when a button is clicked
    setActivePage(tab); // Update the active page in the parent component
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm switch-container" id="pillNav2" role="tablist">
        <li className="nav-item" role="presentation">
          <button className={`nav-link rounded-5 ${activeTab === 'login' ? 'active' : ''}`} id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected={activeTab === 'login'} onClick={() => handleTabClick('login')}>ورود</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link rounded-5 ${activeTab === 'register' ? 'active' : ''}`} id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected={activeTab === 'register'} onClick={() => handleTabClick('register')}>ثبت نام</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;