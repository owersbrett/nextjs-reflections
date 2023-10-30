import { Letter } from '@/app/data/types/Letter';
import { Size } from '@/app/data/enums/Size';
import React, { useState } from 'react';
import { LetterCell } from './LetterCell';
import { Word } from '../data/types/Word';
export interface LetterRowProps {
    word: Word;
    letter: Letter;
    config: LetterRowConfig | undefined;
    onHover(item: Letter): Letter;

}
export interface LetterRowConfig {
    size: Size;
    showIndex: boolean;
    showSound: boolean;
    showLetter: boolean;
    showRomanCharacter: boolean;
    showName: boolean;
    showEmoji: boolean;
    showValue: boolean;

}


export const LetterRow: React.FC<LetterRowProps> = ({ word,letter, config, onHover }) => {
    const [showPopup, setShowPopup] = useState(false);

    let tableRowClass = "text-center justify-content ";
    switch (config?.size) {
        case Size.small: {
            tableRowClass += " text-large"

        }
        case Size.medium: {
            tableRowClass += " text-xl"

        }
        default: {
            tableRowClass += " text-2xl"
        }
    }
    console.log(letter)

    let component = (


        <tr className={tableRowClass} onMouseEnter={()=>setShowPopup(true) } onMouseLeave={()=>setShowPopup(false)} >
                {config?.showIndex ? <td className='p-2'>{letter?.index}</td> : ""}
                {config?.showEmoji ? <td className='p-2' >{letter?.emoji}</td> : ""}
                {config?.showLetter ? <td className='p-2'> {letter.notes[0]?.note ?? ""}</td> : ""}
                {config?.showValue ? <td className='p-2'>{letter?.numericalValue}</td> : ""}
                {config?.showName ? <td className='p-2'>{letter?.word}</td> : ""}
                {config?.showSound ? <td className='p-2'>{letter?.sound}</td> : ""}
                {config?.showRomanCharacter ? <td className='p-2'>{letter?.romanCharacter}</td> : ""}
                {config?.showSound ? <td className='p-2'>{letter?.final}</td> : ""}
                {config?.showLetter ? <td className='p-2'> <LetterCell word={word} letter={letter} showPopup={showPopup}/></td> : ""}
            </tr>

    );


    return component;
};
