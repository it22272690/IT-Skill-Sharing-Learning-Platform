import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateResource = ({ resourceId }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    axios.get(`/api/resources/${resourceId}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error(err));
  }, [resourceId]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`/api/resources/${resourceId}`, formData)
      .then(() => alert('Resource updated successfully!'))
      .catch(err => console.error(err));
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Resource</h2>
      <input name="title" value={formData.title} onChange={handleChange} />
      <textarea name="description" value={formData.description} onChange={handleChange} />
      <textarea name="content" value={formData.content} onChange={handleChange} />
      <input name="prerequisites" value={formData.prerequisites} onChange={handleChange} />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="Course">Course</option>
        <option value="Tutorial">Tutorial</option>
      </select>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateResource;
