import React from 'react';
import './saveButton.css'; // Import the CSS file for styling

const SaveButton = ({ onSave }) => {
  return (
    <button className="save-button" onClick={onSave}>
      Save
    </button>
  );
};

export default SaveButton;
