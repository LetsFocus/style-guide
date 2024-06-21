// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className='login'>
      <h2>Login with Email/Password</h2>
      <div className="login-signup">
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button className='action-button'  onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
