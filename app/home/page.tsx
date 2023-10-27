"use client"

import { Header } from "@/app/components/Header"
import { LetterInfo } from '@/app/components/custom/LetterInfo'
import { Size } from '@/app/data/enums/Size'

import { Letter } from '@/app/data/types/Letter'
import { LetterInfoConfig } from '../components/custom/LetterInfo';
import { useState } from 'react'
import { Footer } from '@/app/components/Footer'
import ScrollSearchBar from "../components/ScrollSearchbar"
import DraggableIcon from "../components/DraggableIcon"
import { db } from "../data/db"

export default function HomePage() {
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
    <main >
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