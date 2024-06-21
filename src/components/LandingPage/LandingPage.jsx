import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Hey, Welcome to our Guidelines</h1>
        <button onClick={()=>{navigate("/home")} }>Get Started</button>
    </div>
  )
}

export default LandingPage