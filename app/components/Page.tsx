import React, { useState } from 'react';
import { Footer } from './Footer';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface PageProps {
    children: React.ReactNode[];
}


const Page: React.FC<PageProps> = ({ children }) => {
    
    let className = `flex fixed justify-center items-center text-center align-middle `

    return (
        <div className={className}>
            {children}
            <Footer word={{
                index: 0,
                sound: '',
                englishWord: "Coded Reflections",
                meanings: ["Coded", "Reflections"],
                word: "השתקפויות מקודדות",
                currentOccurenceCount: 0,
                totalOccurenceCount: 0,
                numericalValue: 0,
                altValue: 0,
                romanCharacter: '',
                emoji: '',
                language: ''
            }} />
        </div>
    );
};

export default Page;
