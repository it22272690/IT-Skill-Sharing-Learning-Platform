import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewResources = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    prerequisites: '',
    type: 'Course'
  });

  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = () => {
    axios.get('/api/resources')
      .then(res => setResources(res.data))
      .catch(err => console.error('Error fetching resources:', err));
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/resources', formData)
      .then(res => {
        alert('Resource created successfully!');
        // Add new resource to the list immediately
        setResources(prev => [...prev, res.data]);
        // Reset form
        setFormData({
          title: '',
          description: '',
          content: '',
          prerequisites: '',
          type: 'Course'
        });
      })
      .catch(err => {
        console.error('Error creating resource:', err);
        alert('Failed to create resource');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create New Course or Tutorial</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <br />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <br />
        <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} />
        <br />
        <input name="prerequisites" placeholder="Prerequisites" value={formData.prerequisites} onChange={handleChange} />
        <br />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Course">Course</option>
          <option value="Tutorial">Tutorial</option>
        </select>
        <br />
        <button type="submit">Create</button>
      </form>

      <h2>All Courses & Tutorials</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource.resourceId}>
            <strong>{resource.title}</strong> - {resource.type}
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ViewResources;
