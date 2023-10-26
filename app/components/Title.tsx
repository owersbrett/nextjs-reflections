import React from 'react';
import { TextProps } from '../data/types/TextProps';



export const Title: React.FC<TextProps> = ({ value }) => {
  return (
    <div className="text-center">

        <h1 className=" left-0 top-0 flex w-full justify-center    pb-6 pt-8  dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {value}
        </h1>
    </div>
  );
};
