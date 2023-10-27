import { Letter } from '@/app/data/types/Letter';
import { Size } from '@/app/data/enums/Size';
import React from 'react';
export interface LetterInfoProps {
    letter: Letter;
    config: LetterInfoConfig | undefined;
    onHover(item: Letter): Letter;

}
export interface LetterInfoConfig {
    size: Size;
    showIndex: boolean;
    showSound: boolean;
    showLetter: boolean;
    showRomanCharacter: boolean;
    showName: boolean;
    showEmoji: boolean;
    showValue: boolean;

}


export const LetterInfo: React.FC<LetterInfoProps> = ({ letter, config }) => {
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
        <tr className={tableRowClass}>
            {config?.showEmoji ? <td className='p-2' >{letter?.emoji}</td> : ""}
            {config?.showIndex ? <td className='p-2'>{letter?.index}</td> : ""}
            {config?.showRomanCharacter ? <td className='p-2'>{letter?.romanCharacter}</td> : ""}
            {config?.showValue ? <td className='p-2'>{letter?.numericalValue}</td> : ""}
            {config?.showName ? <td className='p-2'>{letter?.names}</td> : ""}
            {config?.showSound ? <td className='p-2'>{letter?.sound}</td> : ""}
            {config?.showLetter ? <td className='p-2'>{letter?.letter}</td> : ""}
        </tr>
    );


    return component;
};
