import React from 'react';
import { TextProps } from '../data/types/TextProps';


export const Body: React.FC<TextProps> = ({ value }) => {
  return (
    <div className="text-center">

        <p className=" left-0 top-0 flex w-full justify-center  pb-2 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
        {value}
        </p>
    </div>
  );
};
