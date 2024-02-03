import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import register from '../assets/register.png';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../style.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post('http://your-backend-api-url/signup/', {
        name,
        email,
        password,
      });
  
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/login');
  };

  return (
    <div className='main-container-signup'>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card bg-custom text-white" style={{ borderRadius: '30px' }}>
              <div className="card-body">
                <h3 className="card-title text-center title-font-size">ثبت نام</h3>
                <div className="d-flex">
                  <LazyLoadImage
                    src={register}
                    alt="register"
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
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label text-font-size">
                        <FontAwesomeIcon icon={faLock} className="me-2" />
                        تکرار گذرواژه
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
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary login-btn">
                        ثبت نام
                      </button>
                    </div>

                    <div className="text-center">
                      <p className='link-font-size'><Link to="/login">آیا قبلا ثبت نام کرده اید؟</Link></p>
                      <p className='link-font-size'><Link to="/login">اگر ناشر هستید، اینجا را کلیک کنید</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;