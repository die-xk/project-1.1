import './car.css'

import React from 'react';
import Product360View from './Product360View';

const App1: React.FC = () => {
  return (
    <div className="app">
      <h1 id='Our-new'>Try our new <span id='View-Text'>360 View</span> technology</h1>
      <Product360View />
    </div>
  );
};

export default App1;
