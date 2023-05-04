

import React, { useState, useEffect } from 'react';
import './Particule.css';
export const Particle = ({ size }) => {
  const [position, setPosition] = useState({
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
  });

  const [targetPosition, setTargetPosition] = useState(position);

  useEffect(() => {
    setPosition({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosition(targetPosition);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [targetPosition]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        zIndex: 999,
        background: 'antiquewhite',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: `hsl(${Math.random() * 360}, ${80 + Math.random() * 20}%, ${60 + Math.random() * 30}%)`,
      }}
    ></div>
  );
};

export const Particule = () => {
  const [particles, setParticles] = useState([]);

  const createParticles = () => {
    const newParticles = [];

    for (let i = 0; i < 300; i++) {
      const size = Math.floor(Math.random() * 5);
      newParticles.push(<Particle key={i} size={size}  />);
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    createParticles();
  }, []);

  const handleMouseMove = (event) => {
    setParticles((prevParticles) =>
      prevParticles.map((particle, index) => (
        <Particle
          key={index}
          size={particle.props.size}
          initialPosition={particle.props.initialPosition}
        />
      ))
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, 2000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <>{particles}</>;
};

// export  Particule;

