import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel({ imgProp }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imgProp.map(img => (
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
