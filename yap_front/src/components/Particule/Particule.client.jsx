
import React, { useState, useEffect } from 'react';

const Particle = ({ size }) => {

    // firt let's randomize the position

  const [position, setPosition] = useState({
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
  });
// then let's randomize the shape

    const [shape, setShape] = useState(Math.floor(Math.random() * 3));
    // 0 - circle, 1 - square, 2 - triangle

  useEffect(() => {
    setPosition({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    });

    setShape(Math.floor(Math.random() * 3));
  }, [size]);

  const getShape = () => {
    switch (shape) {
      case 0:
        return <div style={{ borderRadius: '50%', backgroundColor: 'white' }}></div>;

      case 1:
        return <div style={{ width: size, height: size, backgroundColor: 'white' }}></div>;

      case 2:
        return (
          <div style={{ width: 0, height: 0, borderLeft: `${size}px solid transparent`, borderRight: `${size}px solid transparent`, borderBottom: `${size * 2}px solid white` }}>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{ position: 'absolute', top: position.top, left: position.left, zIndex: 999, background:'antiquewhite' }}
    >
      {getShape()}
    </div>
  );
};

export const Particule = () => {
  const [particles, setParticles] = useState([]);

  const createParticles = () => {
    const newParticles = [];

    for (let i = 0; i < 100; i++) {
      const size = Math.floor(Math.random() * 10) + 5;
      newParticles.push(<Particle key={i} size={size} />);
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    createParticles();
  }, []);

  return <>{particles}</>;
};

export default Particule;