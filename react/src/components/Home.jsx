import React from "react";
import { useNavigate } from "react-router-dom";
import ViewPosts from "./ViewPosts";

function Home() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="auth-container">
      <h2>Successful. This is the home page</h2>
      <h2>😁😌</h2>

      <button
        onClick={goToProfile}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        Go to Profile
      </button>


      <ViewPosts />
    </div>
  );
}

export default Home;
