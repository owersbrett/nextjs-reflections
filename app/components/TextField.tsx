import React, { useState } from 'react';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface QuadrantTextProps {
    position: Position;
    label: string;
    onSubmit(value: string): void;
}


const QuadrantTextField: React.FC<QuadrantTextProps> = ({ position, label, onSubmit }) => {
    const [textValue, setTextValue] = useState("");
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
    let className = `flex fixed justify-center items-center text-center align-middle ${getPositionClasses()}`

    return (
        <div className={className}>
            <input type="text" className="border p-2 text-center z-50" placeholder="Centered Text" />
        </div>
        // <textarea defaultValue={textValue}
        // onSubmit={() => onSubmit(textValue)}
        //   className={ `fixed ${getPositionClasses()} w-24 h-14 m-4 z-50 bg-blue-500 text-white text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
        // >
        //   {label}
        // </textarea>
    );
};

export default QuadrantTextField;
