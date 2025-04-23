// src/components/UpdateResource.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateResource = () => {
  const { resourceId } = useParams();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/resources/${resourceId}`,
          { withCredentials: true }
        );
        setFormData(response.data);
      } catch (err) {
        if (err.response?.status === 401) {
          window.location.href = "http://localhost:5050/oauth2/authorization/google";
        } else {
          setError('Failed to load resource');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [resourceId]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5050/api/resources/${resourceId}`,
        formData,
        { withCredentials: true }
      );
      alert('Resource updated successfully!');
      navigate(`/resources/${resourceId}`); // Redirect to resource view
    } catch (err) {
      if (err.response?.status === 401) {
        window.location.href = "http://localhost:5050/oauth2/authorization/google";
      } else {
        console.error('Update error:', err);
        alert('Failed to update resource');
      }
    }
  };

  if (loading) return <div>Loading resource details...</div>;
  if (error) return <div>{error}</div>;
  if (!formData) return <div>Resource not found</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Update Resource</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Title:</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', minHeight: '100px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', minHeight: '150px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Prerequisites:</label>
          <input
            name="prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="Course">Course</option>
            <option value="Tutorial">Tutorial</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Update Resource
        </button>
      </form>
    </div>
  );
};

export default UpdateResource;
