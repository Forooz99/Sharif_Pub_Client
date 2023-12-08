import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
          <ul>
            <li>
              <Link to='/'>خانه</Link>
            </li>
            <li>
              <Link to='/login'>ورود</Link>
            </li>
            <li>
              <Link to='/signup'>ثبت نام</Link>
            </li>
          </ul>
        </nav>
    );
};
  
export default Navbar;
  