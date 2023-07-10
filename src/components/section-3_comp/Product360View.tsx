import React, { useState, useRef } from 'react';
import './car.css'

interface Product360ViewProps {
  images: React.ReactNode[];
}

const Product360View: React.FC<Product360ViewProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDragStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDragging(true);
    setStartX(event.clientX);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      const currentX = event.clientX;
      const deltaX = currentX - startX;

      const rotationIncrement = (360 / images.length) * (deltaX / 400);
      const newRotation = (currentIndex * (360 / images.length) + rotationIncrement) % 360;
      const newIndex = Math.round((newRotation / 360) * images.length);

      setCurrentIndex(newIndex >= 0 ? newIndex : newIndex + images.length);
      setStartX(currentX);
    }
  };

  return (
    <div className='wrapper-for-car'>
      
      <div 
        style={{ position: 'relative', width: '400px', height: '400px' }}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
      >
        {images[currentIndex]}
        <button
          ref={buttonRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            pointerEvents: 'none',
          }}
          onMouseDown={handleDragStart}
        >
          Rotate
        </button>
      </div>
      <div className="item-it">
        <button className='bt-btn' onClick={handlePrevious}>Previous</button>
        <button className='bt-btn' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Product360View;
