// src/components/MainLogin.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import EmailSignup from '../Signup/SIgnup';
import EmailLogin from './Login';

function MainLogin({ firstPage }) {
  const { user, logout } = useAuth();
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${firstPage}`);
    }
  }, [user, navigate, firstPage]);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className='main-login'>
       <h1>Hey, Welcome to our Guidelines</h1>
      {user ? (
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          {showSignup ? (
            <>
              <EmailSignup />
              <div className='additional-actions'>
                <button className='action-button support-button' onClick={toggleSignup}>Back to Login</button>
              </div>
            </>
          ) : (
            <>
              <EmailLogin />
              <div className="additional-actions">
                <button className='action-button support-button' onClick={toggleSignup}>Sign Up</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MainLogin;
