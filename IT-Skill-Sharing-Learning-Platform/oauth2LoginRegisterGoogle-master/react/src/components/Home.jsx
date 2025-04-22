import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToResourceManagement = () => {
    navigate('/resources');
  };

  return (
    <div className="auth-container">
      <h2>Successful. This is the home page</h2>
      <h2>😁😌</h2>
      <button onClick={goToResourceManagement} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Go to Course & Tutorial Management
      </button>
    </div>
  );
}

export default Home;
