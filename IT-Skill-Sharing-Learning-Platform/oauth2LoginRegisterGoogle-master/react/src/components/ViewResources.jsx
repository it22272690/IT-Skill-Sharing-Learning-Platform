import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeleteResource from './DeleteResource'; // Adjust the path as needed

const ViewResources = () => {
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5050/api/resources', { withCredentials: true })
      .then(res => {
        // Sort so newest appears first
        const sorted = [...res.data].sort((a, b) => b.resourceId - a.resourceId);
        setResources(sorted);
      })
      .catch(err => console.error('Error fetching resources:', err));
  }, []);

  const handleDelete = (deletedId) => {
    setResources(prev => prev.filter(r => r.resourceId !== deletedId));
  };

  const handleEdit = (resourceId) => {
    navigate(`/resources/update/${resourceId}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Courses & Tutorials</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {resources.map(resource => (
          <li key={resource.resourceId} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '15px' }}>
            <h3>{resource.title} <span style={{ fontWeight: 'normal', color: '#666' }}>({resource.type})</span></h3>
            <p><strong>Description:</strong> {resource.description}</p>
            <p><strong>Content:</strong> {resource.content}</p>
            <p><strong>Prerequisites:</strong> {resource.prerequisites}</p>
            <div>
              <button
                onClick={() => handleEdit(resource.resourceId)}
                style={{
                  color: 'white',
                  background: 'blue',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  marginRight: '10px',
                  borderRadius: '4px'
                }}
              >
                Edit
              </button>
              <DeleteResource resourceId={resource.resourceId} onDelete={handleDelete} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewResources;
