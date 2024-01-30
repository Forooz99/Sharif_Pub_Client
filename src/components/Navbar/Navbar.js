import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/">
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                ورود
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                ثبت نام
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
