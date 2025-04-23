import React, { useEffect, useState } from 'react';

function ViewPosts() {
  const [posts, setPosts] = useState([]);
  const currentUserId = localStorage.getItem('userId'); // use 'userId' like CreatePost

  useEffect(() => {
    fetch('http://localhost:5050/api/posts')
      .then(res => res.json())
      .then(data => {
        const filteredPosts = data.filter(post => String(post.userId) !== String(currentUserId));
        setPosts(filteredPosts);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        alert('Failed to load posts');
      });
  }, [currentUserId]);

  const renderMedia = (base64) => {
    if (!base64) return null;

    const isVideo = base64.startsWith('data:video');

    if (isVideo) {
      return (
        <video
          src={base64}
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="auto"
          className="w-full h-48 object-cover rounded mb-4"
        >
          <source src={base64} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <img
        src={base64}
        alt="Post"
        className="w-full h-48 object-cover rounded mb-4"
      />
    );
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-2">All Posts</h2>
      <p className="text-gray-700 mb-6">Current Logged-in User ID: <span className="font-semibold">{currentUserId || 'Not logged in'}</span></p>

      {posts.length === 0 ? (
        <p className="text-gray-600">No posts available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.postId} className="border rounded shadow p-4 bg-white relative">
              {renderMedia(post.post)}
              <p className="text-sm text-gray-500 mb-1">User ID: {post.userId}</p>
              <p className="mb-2 font-medium">{post.description}</p>
              <p className="text-sm text-gray-600">Likes: {post.likes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewPosts;
