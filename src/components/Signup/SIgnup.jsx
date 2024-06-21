import React, { useState } from 'react';
import { auth } from '../../firebase';
import './Signup.css'

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='signup'> 
      <h2>Sign up with Email/Password</h2>
      {error && <p style={{ color: 'red',maxWidth:"100%" }}>{error}</p>}
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
        <button className='action-button' onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
};

export default EmailSignup;
