import React from 'react';
import axios from 'axios';

const DeleteResource = ({ resourceId, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      axios.delete(`http://localhost:5050/api/resources/${resourceId}`, { withCredentials: true })
        .then(() => {
          alert("Resource deleted successfully!");
          if (onDelete) onDelete(resourceId);
        })
        .catch(err => {
          console.error(err);
          alert("Failed to delete resource.");
        });
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        color: 'white',
        background: 'red',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        marginLeft: '10px'
      }}
    >
      Delete
    </button>
  );
};

export default DeleteResource;
