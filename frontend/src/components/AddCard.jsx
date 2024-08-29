import React, { useState } from 'react';
import './AddCard.css';

const AddCard = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAdd({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-card">
      <h2>Add a New Help Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddCard;
