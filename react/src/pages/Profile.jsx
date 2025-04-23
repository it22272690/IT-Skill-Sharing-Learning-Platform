
import React from "react";
import CreatePost from "../components/CreatePost";
import ProfilePosts from "../components/ProfilePosts";

function Profile() {
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  return (
    <div className="auth-container">
      <h2>Welcome to Your Profile</h2>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Name:</strong> {userName}</p>
      <p><strong>Email:</strong> {userEmail}</p>

      <CreatePost />

      <ProfilePosts />
    </div>
  );
}

export default Profile;
