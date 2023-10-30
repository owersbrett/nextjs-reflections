// FallingText.tsx
import React, { useEffect, useState } from 'react';

interface Props {
  phrases: Phrase[];
}

interface Phrase {
  text: string;
  color: string;
}

const FallingText: React.FC<Props> = ({ phrases }) => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Initialize positions
    const initialPositions = phrases.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    // setPositions(initialPositions);

    const animate = () => {
      // Update positions
      const newPositions = positions.map((pos) => {
        let newY = pos.y + 1;
        if (newY > window.innerHeight) {
          newY = 0; // Reset to top
        }
        return {
          x: pos.x,
          y: newY,
        };
      });
      setPositions(newPositions);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    // return Animation;
  }, [positions]);

  return (
    <div className='falling-text-container text-lg text-orange' style={{ position: 'relative', overflow: 'hidden' }}>
      {phrases.map((phrase, index) => (
        <div className='z-50'key={index}>
          {phrase.text}
        </div>
      ))}
    </div>
  );
};

export default FallingText;
