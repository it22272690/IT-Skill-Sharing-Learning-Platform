import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateResource = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    prerequisites: '',
    type: 'Course'
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5050/api/resources", formData)
      .then(res => {
        alert('Resource created successfully!');
        setFormData({
          title: '',
          description: '',
          content: '',
          prerequisites: '',
          type: 'Course'
        });
        // Redirect to the detail page of the newly created resource
        const newId = res.data.resourceId;
        navigate(`/resources/${newId}`);
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Resource</h2>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} />
      <input name="prerequisites" placeholder="Prerequisites" value={formData.prerequisites} onChange={handleChange} />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="Course">Course</option>
        <option value="Tutorial">Tutorial</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateResource;
