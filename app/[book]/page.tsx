"use client"

import Image from 'next/image'
import { Header } from "@/app/components/Header"
import { Title } from '@/app/components/Title'
import { Size } from '@/app/data/enums/Size'

import { Letter } from '@/app/data/types/Letter'

import { useState } from 'react'
import { Body } from '@/app/components/Body'
import { Path } from '../components/Path'
import { db } from '../data/db';
import { LetterRow, LetterRowConfig } from '../components/LetterInfo'

export default function BookPage({ params }: { params: { book: string } }) {
  let defaultConfig: LetterRowConfig = {
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
  let mainBody = bereshit.text;
  let transliteration = bereshit.transliteration;

  let table = Array.from(title).map((item, index) => {
    let letter = db.alphabets.hebrew.get(item);
    if (letter == undefined) letter = db.alphabets.hebrew.get("0")!;
    let word = db.words.hebrew.get(letter.word) ?? db.words.hebrew.get("0")!;

    return (<LetterRow config={titleConfig} letter={letter} key={index} onHover={function (item: Letter): Letter {
      throw new Error('Function not implemented.')
    }} word={word} />)
  });

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 w-full items-center font-mono text-sm lg:flex">

          <div className='hebrew'>

            <div className='flex flex-col'>
              <div className=''>
                {bereshit.verses.map((verse, index) => {
                  return (
                    <>
                      <div
                        className='flex flex-row justify-between'>
                        <div className='p-4 text-lg ' key={"id2:" + index}>
                          <Body value={bereshit.transliteratedVerses[index]} />
                        </div>
                        <div className='p-4 text-lg' key={"id1:" + index}>
                          <Body value={bereshit.englishVerses[index]} />
                        </div>
                        <div className='p-4 text-lg' key={"id:" + index}>
                          <Body value={verse} />
                        </div>
                      </div>

                    </>

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

    </main>
  )
}