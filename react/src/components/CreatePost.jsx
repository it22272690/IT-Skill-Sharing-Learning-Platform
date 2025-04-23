import React, { useState } from 'react';

function CreatePost() {
  const [description, setDescription] = useState('');
  const [mediaBase64, setMediaBase64] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [preview, setPreview] = useState(null);

  const userId = localStorage.getItem('userId');
  const MAX_SIZE_MB = 50;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > MAX_SIZE_MB) {
      alert(`File too large. Max allowed size is ${MAX_SIZE_MB}MB.`);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaBase64(reader.result);
      setPreview(reader.result);
      setMediaType(file.type.startsWith('video') ? 'video' : 'image');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const postData = {
      userId,
      post: mediaBase64,
      description,
      likes: 0
    };

    try {
      const response = await fetch('http://localhost:5050/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        alert('Post uploaded successfully!');
        setDescription('');
        setMediaBase64('');
        setPreview(null);
        setMediaType('');
      } else {
        alert('Failed to upload post.');
      }
    } catch (error) {
      console.error('Error uploading post:', error);
      alert('Error uploading post.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          required
          className="mb-4"
        />

        {preview && mediaType === 'image' && (
          <img src={preview} alt="Preview" className="mb-4 w-full h-auto rounded" />
        )}

        {preview && mediaType === 'video' && (
          <video
            src={preview}
            autoPlay
            muted
            loop
            controls
            playsInline
            className="mb-4 w-full h-auto rounded"
          />
        )}

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a description..."
          rows="3"
          className="w-full p-2 border rounded mb-4"
          required
        ></textarea>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Upload Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
