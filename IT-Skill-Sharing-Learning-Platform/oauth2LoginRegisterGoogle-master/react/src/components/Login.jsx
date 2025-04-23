import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLocalLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/login/local', {
        email,
        password
      });

      const user = response.data;
      localStorage.setItem('userId', user.id);
      localStorage.setItem('userName', user.name);
      localStorage.setItem('userEmail', user.email);

      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      alert('Login failed!');
    }
  };

  // Google OAuth2 login handler
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5050/oauth2/authorization/google";
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleLocalLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter Email ..."
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter Password ..."
        />

        <button type="submit" className="auth-button">
          Login
        </button>
      </form>

      <div className="oauth-providers">
        <button 
          type="button" 
          onClick={handleGoogleLogin}
          className="google-auth-button"
        >
          Continue with Google
        </button>
      </div>

      <p className="auth-switch">
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
