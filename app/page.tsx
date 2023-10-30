"use client"
import './globals.css';
import { useEffect, useState } from 'react';

import { Size } from './data/enums/Size';
import { Letter } from './data/types/Letter';
import { db } from './data/db';
import ScrollSearchBar from './components/ScrollSearchbar';
import Link from 'next/link';
import { LetterRow, LetterRowConfig } from './components/LetterInfo';




export default function Home() {
  
  let defaultConfig: LetterRowConfig = {
    size: Size.small,
    showIndex: true,
    showSound: true,
    showValue: true,
    showLetter: true,
    showRomanCharacter: true,
    showName: true,
    showEmoji: true
  }

  let alephBet = Array.from(db.alphabets.hebrew.values());


  let table = alephBet.map((item, index) => {
    let letter = item;
    let word = db.words.hebrew.get(letter.word);
    if (word == undefined){
      word = db.default.word;
    }
    return (<LetterRow word={word} config={defaultConfig} letter={letter} key={index} onHover={(letter: Letter) => {
      return letter;
    }} />)
  });

  return (
    <div className='p-4' >
      <div className="flex min-h-screen flex-col items-end justify-between ">
        <div className="z-10 max-w-5xl w justify-between font-mono text-sm lg:flex">
          <div className='hebrew'>
            <div className='flex justify-end pb-16'>
              <div>
                <table className='text-3xl justify-end'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>📛</th>
                      <th>🔢</th>
                      <th>🔢</th>
                      <th>🔊</th>
                      <th>🗣</th>
                      <th>🔤</th>
                      <th>🏁</th>
                      <th>א</th>
                    </tr>
                  </thead>
                  <tbody>{table}</tbody>
                </table>
              </div>
            </div>


          </div>

        </div>
      </div>
      <Link href={'/genesis'} >
        Genesis
      </Link>
      <ScrollSearchBar /> 

    </div>

  )
}