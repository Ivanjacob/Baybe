import React from 'react';
import './GrowSpinner.css';

const GrowSpinner = ({ size = 'default' }) => {
  return (
    <div className={`grow-spinner ${size}`}></div>
  );
};

export default GrowSpinner;
