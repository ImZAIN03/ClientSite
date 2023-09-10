/* Dates.js */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Dates.css';


const Dates = () => {
  const [hoveredYear, setHoveredYear] = useState(null);

  const handleMouseEnter = (year) => {
    setHoveredYear(year);
  };

  const handleMouseLeave = () => {
    setHoveredYear(null);
  };

  return (
    <>
      <div className="date">
        <div
          className="year one"
          onMouseEnter={() => handleMouseEnter(2019)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredYear === 2019 && (
            <>
              <img
                className="transition-image"
                src="your-image-1-url.jpg"
                alt="Image 1"
              />
              <img
                className="transition-image"
                src="your-image-2-url.jpg"
                alt="Image 2"
              />
            </>
          )}
          2019
        </div>
        <div
          className="year two"
          onMouseEnter={() => handleMouseEnter(2020)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredYear === 2020 && (
            <>
              <img
                className="transition-image"
                src="your-image-3-url.jpg"
                alt="Image 3"
              />
              <img
                className="transition-image"
                src="your-image-4-url.jpg"
                alt="Image 4"
              />
            </>
          )}
          2020
        </div>
        <div
          className="year three"
          onMouseEnter={() => handleMouseEnter(2021)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredYear === 2021 && (
            <>
              <img
                className="transition-image"
                src="your-image-5-url.jpg"
                alt="Image 5"
              />
              <img
                className="transition-image"
                src="your-image-6-url.jpg"
                alt="Image 6"
              />
            </>
          )}
          2021
        </div>
        <div
          className="year four"
          onMouseEnter={() => handleMouseEnter(2022)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredYear === 2022 && (
            <>
              <img
                className="transition-image"
                src="your-image-7-url.jpg"
                alt="Image 7"
              />
              <img
                className="transition-image"
                src="your-image-8-url.jpg"
                alt="Image 8"
              />
            </>
          )}
          2022
        </div>
        <div
          className="year five"
          onMouseEnter={() => handleMouseEnter(2023)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredYear === 2023 && (
            <>
              <img
                className="transition-image"
                src="your-image-9-url.jpg"
                alt="Image 9"
              />
              <img
                className="transition-image"
                src="your-image-10-url.jpg"
                alt="Image 10"
              />
            </>
          )}
          2023
        </div>
        <div
          className="year six"
          onMouseEnter={() => handleMouseEnter(2024)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredYear === 2024 && (
            <>
              <img
                className="transition-image"
                src="your-image-11-url.jpg"
                alt="Image 11"
              />
              <img
                className="transition-image"
                src="your-image-12-url.jpg"
                alt="Image 12"
              />
            </>
          )}
          2024
        </div>
      </div>
      
    </>

    
  );
  
};

export default Dates;
