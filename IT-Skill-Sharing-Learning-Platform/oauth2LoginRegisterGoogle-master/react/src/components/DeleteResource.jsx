import React from 'react';
import axios from 'axios';

const DeleteResource = ({ resourceId, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      axios.delete(`/api/resources/${resourceId}`)
        .then(() => {
          alert("Resource deleted.");
          if (onDelete) onDelete(resourceId);
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteResource;
