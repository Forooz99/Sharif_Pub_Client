import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import register from '../assets/register.png';
import { useNavigate } from 'react-router-dom';import '../style.css';
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
    // Perform registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card bg-custom text-white" style={{ borderRadius: '30px' }}>
            <div className="card-body">
              <h3 className="card-title text-center">ثبت نام</h3>
              <div className="d-flex">
                <img className="image me-3" src={register} alt="register" />
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      نام کاربری
                    </label>
                    <input
                      type="text"
                      className="form-control input-custom"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
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
                    <label htmlFor="password" className="form-label">
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
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      ثبت نام
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;