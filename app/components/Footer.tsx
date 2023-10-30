"use client"
import React from 'react';
import { Body } from './Body';
import { Word } from '../data/types/Word';

interface FooterProps {
    word: Word;
}

export const Footer: React.FC<FooterProps> = ({ word }) => {
    return (
        <div className='p-8' key={"footer"} id={"footer"}>
            <div className='flex justify-evenly'>
                <Body value={word.word} />
                
            </div>
        </div>
    );
};
