import React from 'react';
import { TextProps } from '../data/props/TextProps';
import { Body } from './Body';
import Link from 'next/link';
import { LetterInfoProps } from './custom/LetterInfo';
import { Word } from '../data/types/Word';

interface FooterProps {
    word: Word;
}

export const Footer: React.FC<FooterProps> = ({ word }) => {
    return (
        <div className='p-8'>
            <div className='flex justify-evenly'>
                <Body value={word.word} />
                {/* <Link href="/genesis/">
                    {"<"}
                </Link>
                    <Body value={letter.letter} />
                <Link href="/genesis/1">
                    {">"}
                </Link> */}
            </div>
        </div>
    );
};
