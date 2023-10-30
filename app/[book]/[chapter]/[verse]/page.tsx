"use client"

import Image from 'next/image'
import { Header } from "@/app/components/Header"
import { Title } from '@/app/components/Title'
import { LetterInfo, LetterInfoConfig } from '@/app/components/LetterInfo'
import { Size } from '@/app/data/enums/Size'

import { Letter } from '@/app/data/types/Letter'

import { useState } from 'react'
import { Body } from '@/app/components/Body'
import { Path } from '@/app/components/Path'
import { db } from '@/app/data/db'

export default function VersePage({ params }: { params: { query: string } }) {
  let defaultConfig: LetterInfoConfig = {
    size: Size.large,
    showIndex: true,
    showSound: true,
    showValue: true,
    showLetter: true,
    showRomanCharacter: true,
    showName: true,
    showEmoji: true
  }
let book = db.books.genesis;

  
  const [titleConfig, setTitleConfig] = useState(defaultConfig)
  let bereshit = ["ב", "ר", "א", "ש", "י", "ת"]
  let hebrewBody = "בּראשית בּרא אַלהים את השמים ואת הארץ"
  let hebrewBodyTransliteration = "Bereshit bara elohim et hashamayim va'et ha'aretz"

  let table = bereshit.map((item, index) => {
    let letter = db.alphabets.hebrew.get(item);
    if (letter == undefined) letter = db.alphabets.hebrew.get("0") as Letter;
    return (<LetterInfo config={titleConfig} letter={letter} key={index} onHover={function (item: Letter): Letter {
      throw new Error('Function not implemented.')
    }} />)
  });

  return (
    <main >
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Path />
          <div className='hebrew'>
            <div className='flex flex-row justify-around text-4xl'>
              <Title value={'Genesis - ב ר א ש י ת'} />
            </div>

            <div className='p-4 text-2xl'>
              <Body value={hebrewBody} />
            </div>
            <div className='p-4 text-2xl'>
              <Body value={hebrewBodyTransliteration} />
            </div>
            <div className='flex justify-center'>
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