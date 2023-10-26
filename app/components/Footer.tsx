import React from 'react';
import { TextProps } from '../data/types/TextProps';
import { Body } from './Body';
import Link from 'next/link';



export const Footer: React.FC<TextProps> = ({ value }) => {
    return (
        <div className='p-8'>
            <Body value={value} />
            <div className='flex justify-evenly'>
                <Link href="/home/LessPage">
                    {"<"}
                </Link>
                <Link href="/home/MorePage">
                    {">"}
                </Link>
            </div>
        </div>
    );
};
