import React, { useState } from 'react';
import { TextProps } from '../data/props/TextProps';
import Link from 'next/link';
import { Letter } from '../data/types/Letter';
import { Word } from '../data/types/Word';

export interface LetterCellProps{
  word: Word;
  letter: Letter;
  showPopup: boolean;
}


export const LetterCell: React.FC<LetterCellProps> = ({ word, letter, showPopup}) => {

  let href= "/" + word?.word;

  return (
    <div className="text-center text-xl" >
        <Link href="/" >
            {letter.letter}
        </Link>

      </div>
  );
};
