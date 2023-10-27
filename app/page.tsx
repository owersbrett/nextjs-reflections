"use client"
import { useState } from 'react';
import { LetterInfo, LetterInfoConfig } from './components/custom/LetterInfo';
import { Size } from './data/enums/Size';
import { Letter } from './data/types/Letter';
import HomePage from './home/page'
import { db } from './data/db';
import ScrollSearchBar from './components/ScrollSearchbar';
import DraggableIcon from './components/DraggableIcon';
import { Header } from './components/Header';




export default function Home() {
  let defaultConfig: LetterInfoConfig = {
    size: Size.small,
    showIndex: true,
    showSound: true,
    showValue: true,
    showLetter: true,
    showRomanCharacter: true,
    showName: true,
    showEmoji: true
  }
  const [titleConfig, setTitleConfig] = useState(defaultConfig)
  let alephBet = Array.from(db.alphabets.hebrew.values());
  let footer = "\"In The Beginning, God Created the heaven and the earth.\" - Genesis 1.1"
  let hebrewBody = "בּראשית בּרא אַלהים את השמים ואת הארץ"
  let hebrewBodyTransliteration = "Bereshit bara elohim et hashamayim va'et ha'aretz"

  let table = alephBet.map((item, index) => {
    let letter = item;
    return (<LetterInfo config={titleConfig} letter={letter} key={index} onHover={(letter: Letter) => {
      return letter;
    }} />)
  });

  return (
    <main className='p-4' >
      <ScrollSearchBar />
      <DraggableIcon />
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Header value={'Reflections'} />
          <div className='hebrew'>
            <div className='flex flex-row justify-around text-2xl'>


            </div>


            <div className='flex justify-center pb-16'>
              <div>
                <table className='text-3xl justify-center'>
                  <thead>
                    <tr>
                      <th>📛</th>
                      <th>#</th>
                      <th>🔊</th>
                      <th>🔢</th>
                      <th>🗣</th>
                      <th>🔤</th>
                      <th>🌐</th>
                    </tr>
                  </thead>
                  <tbody>{table}</tbody>
                </table>
              </div>
            </div>


          </div>

        </div>
      </div>
  
    </main>
  )
}