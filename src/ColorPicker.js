import React, { useState } from 'react';
import './ColorPicker.css'; // Add this line if you want to style your component

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker">
        <h1>Color Picker</h1>
      <button onClick={() => setShowColors(!showColors)}>Pick a color</button>
      {showColors && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && <p>Selected Color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
