import React, { useState } from 'react';
import './car.css'


interface Product360ViewProps {
  images: string[];
}

const Product360View: React.FC<Product360ViewProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDragStart = (event: React.MouseEvent<HTMLImageElement>) => {
    setDragging(true);
    setStartX(event.clientX);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (dragging) {
      const currentX = event.clientX;
      const deltaX = currentX - startX;

      if (deltaX > 50) {
        handlePrevious();
        setStartX(currentX);
      } else if (deltaX < -50) {
        handleNext();
        setStartX(currentX);
      }
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(event.target.value);
    setCurrentIndex(newIndex);
  };

  return (
    <div id='container2'>
    <div className="carsizing">
      <img
        id='360carsize'
        src={images[currentIndex]}
        alt="Product"
        style={{ width: '100%', height: '100%' }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
      />
    </div>
      
            <br />
      <input
        className='range-inp'
        type="range"
        min={0}
        max={images.length - 1}
        value={currentIndex}
        onChange={handleSliderChange}
        style={{ width: '300px', marginTop: '8px' }}
      />
    </div>
  );
};

export default Product360View;
