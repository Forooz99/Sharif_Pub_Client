import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import login from '../assets/login.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../style.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/profile');
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='main-container-login'>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card bg-custom text-white" style={{ borderRadius: '30px' }}>
              <div className="card-body">
                <h3 className="card-title text-center title-font-size">ورود</h3>
                <div className="d-flex">
                  <LazyLoadImage
                    src={login}
                    alt="login"
                    effect="blur"
                    className="image me-3"
                  />
                  <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-font-size">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      ایمیل
                    </label>
                    <input
                      type="email"
                      className="form-control input-custom"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label text-font-size">
                      <FontAwesomeIcon icon={faLock} className="me-2" />
                      گذرواژه
                    </label>
                    <input
                      type="password"
                      className="form-control input-custom"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="checkbox" className='text-font-size'> ناشر هستم </label>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={isChecked}
                      onChange={checkHandler}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary login-btn">
                      ورود
                    </button>
                  </div>
                </form>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <p className='text-font-size'>ورود با گوگل</p>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn btn-outline-primary">
                    <FontAwesomeIcon icon={faGoogle} className="me-2" />
                    Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;