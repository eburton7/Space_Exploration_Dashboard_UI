import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './LoginPage.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic here
    // On successful login, navigate to another page:
    // navigate('/dashboard');
  };
  
  return (
    <div>
      <Header />
      <div className="login-page">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>

          <div className="login-options">
            <Link to="/forgot-username">Forgot Username?</Link>
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/create-account">Create Account</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
