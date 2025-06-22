import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  texts: string[];
  className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ texts, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 1000); // 1 second fade out
    }, 2000); // Display each text for 2 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default RotatingText;