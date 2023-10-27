import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

const DraggableIcon: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag = (clientX: number, clientY: number) => {
    if (isDragging && dragRef.current) {
      setPosition({
        x: clientX - dragRef.current.offsetWidth / 2,
        y: clientY - dragRef.current.offsetHeight / 2,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleDrag(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault(); // Prevent scrolling only when dragging
      handleDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
    className='z-50 p-8 bg-white text-black text-xl rounded-3xl'

      ref={dragRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: 'grab',
      }}
    >
<FaSearch />
    </div>
  );
};

export default DraggableIcon;
