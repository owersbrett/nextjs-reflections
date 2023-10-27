import React from 'react';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface QuadrantButtonProps {
  position: Position;
  label: string;
  onClick(): void; 
}

const QuadrantButton: React.FC<QuadrantButtonProps> = ({ position, label, onClick }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return 'top-0 left-0';
    }
  };

  return (
    <button
    onClick={() => onClick()}
      className={ `fixed ${getPositionClasses()} w-24 h-14 m-4 z-50 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
    >
      {label}
    </button>
  );
};

export default QuadrantButton;
