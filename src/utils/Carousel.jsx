import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Img } from './ControlledCarousel.styled';

export default function ControlledCarousel({ imgProp }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imgProp.map(img => (
        <Carousel.Item>
          <Img className="d-block mx-auto" src={img} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
