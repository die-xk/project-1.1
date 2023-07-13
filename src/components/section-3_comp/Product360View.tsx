import React, { useRef, useState } from 'react';
import './car.css'

const Product360View: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const x = e.nativeEvent.offsetX;
    const imageCount = 7; // Number of images in the 360-degree view
    const newIndex = Math.floor((x / containerWidth) * imageCount);
    setImageIndex(newIndex);
  };

  return (
    <div
      className="move"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <img
        src={`src/assets/360/car_${imageIndex}.png`}
        alt=""
        className="product-image product-360-container"
      />
    </div>
  );
};

export default Product360View;
