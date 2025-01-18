import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  z-index: 0; /* Keep circles in the background */
`;

const MovingCirclesContainer = styled.div`
  position: fixed; /* Keep circles fixed in the background */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none; /* Prevent interactions with the circles */
`;

const MovingCircles = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numberOfCircles = 3;

  const circles = Array.from({ length: numberOfCircles }).map((_, index) => (
    <Circle
      key={index}
      initial={{ x: randomX(), y: randomY() }}
      animate={{
        x: [null, randomX(), randomX()],
        y: [null, randomY(), randomY()],
      }}
      transition={{
        duration: 30 + Math.random() * 30,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        width: `${300 + Math.random() * 400}px`,
        height: `${300 + Math.random() * 400}px`,
        borderWidth: `${3 + Math.random() * 5}px`,
      }}
    />
  ));

  function randomX() {
    return Math.random() * (windowSize.width - 700);
  }

  function randomY() {
    return Math.random() * (windowSize.height - 700);
  }

  return <MovingCirclesContainer>{circles}</MovingCirclesContainer>;
};

export default MovingCircles;