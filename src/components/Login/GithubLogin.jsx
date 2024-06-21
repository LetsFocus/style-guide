// src/components/GitHubLogin.jsx
import React from 'react';
import { auth } from '../../firebase';
import firebase from 'firebase/compat/app';

const GitHubLogin = () => {
  const handleGitHubLogin = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error("Error logging in with GitHub:", error.message);
    }
  };

  return (
    <div>
      <button className='action-button' onClick={handleGitHubLogin}>Login with GitHub</button>
    </div>
  );
};

export default GitHubLogin;
