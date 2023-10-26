"use client"

import Image from 'next/image'
import { Header } from "@/app/components/Header"
import { Title } from '@/app/components/Title'
import { LetterInfo } from '@/app/components/custom/LetterInfo'
import { Size } from '@/app/data/types/Size'

import { Letter } from '@/app/data/types/Letter'
import { hebrew } from '@/app/data/hebrew'
import { LetterInfoConfig } from '../../app/components/custom/LetterInfo';
import { useState } from 'react'
import { Body } from '@/app/components/Body'
import { Footer } from '@/app/components/Footer'

export const LessPage: React.FC = () => {
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
  const [titleConfig, setTitleConfig] = useState(defaultConfig)
  let bereshit = ["ב", "ר", "א", "ש", "י", "ת"]
  let footer = "\"In The Beginning, God Created the heaven and the earth.\" - Genesis 1.1"
  let hebrewBody = "בּראשית בּרא אַלהים את השמים ואת הארץ"
  let hebrewBodyTransliteration = "Bereshit bara elohim et hashamayim va'et ha'aretz"

  let table = bereshit.map((item, index) => {
    let letter = hebrew.find((value) => value.letter == item);
    if (letter == undefined) letter = hebrew[0] as Letter;
    return (<LetterInfo config={titleConfig} letter={letter} key={index} />)
  });

  return (
    <main >
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Header value={'Reflections'} />
          <div className='hebrew'>
            <div className='flex flex-row justify-around text-2xl'>
              <Title value={'Bereshit'} />
              <Title value={'ב ר א ש י ת'} />
            </div>

            <div className='p-4 text-lg'>
              <Body value={hebrewBody} />
            </div>
            <div className='p-4 text-md'>
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
      <Footer value={footer} />
    </main>
  )
}