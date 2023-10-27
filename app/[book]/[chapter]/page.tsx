"use client"

import { Title } from '@/app/components/Title'
import { LetterInfo, LetterInfoConfig } from '@/app/components/custom/LetterInfo'
import { Size } from '@/app/data/enums/Size'

import { Letter } from '@/app/data/types/Letter'

import { useState } from 'react'
import { Body } from '@/app/components/Body'
import { Footer } from '@/app/components/Footer'
import { db } from '@/app/data/db'
import { Path } from '@/app/components/Path'


export default function ChapterPage({ params }: { params: { book: string } }) {
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

  let bereshit = db.books.genesis;
  let title = bereshit.title;
  let footer = bereshit.common;
  let mainBody = bereshit.text;
  let transliteration = bereshit.transliteration;

  let table = Array.from(title).map((item, index) => {
    let letter = db.alphabets.hebrew.get(item);
    if (letter == undefined) letter = db.alphabets.hebrew.get("0")!;

    return (<LetterInfo config={titleConfig} letter={letter} key={index} onHover={function (item: Letter): Letter {
      throw new Error('Function not implemented.')
    }} />)
  });

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Path />
          <div className='hebrew'>
            <div className='flex flex-row justify-end text-2xl'>
              <Title value={title} />
            </div>
            <div className='flex flex-col'>
              <div className=''>
                {bereshit.verses.map((verse, index) => {
                  return (
 
                    <div className='p-4 text-lg ' key={"id:" + index}>
                      <Body value={verse} />
                    </div>

                  );
                })}
              </div>
            </div>
            <div className='p-4 text-md'>
              <Body value={transliteration} />
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
      <Footer word={{
        index: 0,
        sound: '',
        word: footer,
        currentOccurenceCount: 0,
        totalOccurenceCount: 0,
        numericalValue: 0,
        altValue: 0,
        romanCharacter: '',
        names: '',
        emoji: '',
        language: ''
      }} />
    </main>
  )
}