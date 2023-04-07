import React from 'react';
import './styles.css';

export const Loading: React.FC<{ type?: 'image' | 'text' }> = ({ type = 'image' }) => {
  return (
    <div className="loading">
      {type === 'text' && <p aria-label="Loading">Loading</p>}
      {type === 'image' && <div className="loader-image"></div>}
    </div>
  );
};
