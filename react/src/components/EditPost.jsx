import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
  const { id } = useParams(); // postId from URL
  const [description, setDescription] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5050/api/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        setDescription(post.description);
        setImageBase64(post.post);
        setPreview(post.post);
      })
      .catch(() => alert("Failed to load post"));
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      description,
      post: imageBase64,
      likes: 0
    };

    const response = await fetch(`http://localhost:5050/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    });

    if (response.ok) {
      alert('Post updated!');
      navigate('/viewposts');
    } else {
      alert('Update failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
        {preview && <img src={preview} alt="preview" className="w-full h-auto mb-4" />}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          className="w-full p-2 border rounded mb-4"
          placeholder="Description"
          required
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
