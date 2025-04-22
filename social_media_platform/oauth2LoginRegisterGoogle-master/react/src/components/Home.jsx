import React from "react";
import ViewPosts from "./ViewPosts";
import CreatePost from "./CreatePost";

function Home() {
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  return (
    <div className="auth-container">
      <h2>Successful. This is the home page</h2>
      <h2>😁😌</h2>

      

      <CreatePost />

      <ViewPosts/>
    </div>
  );
}

export default Home;
