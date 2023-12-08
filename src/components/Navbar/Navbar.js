import React from 'react';


const Navbar = () => {
    return (
      <div className='navbar'>
        <div className='navbar-container'>
          <ul className='navbar-links'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
};
  
export default Navbar;
  