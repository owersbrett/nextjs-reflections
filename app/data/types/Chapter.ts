import { Letter } from "./Letter";
import { Word } from "./Word";

export type Chapter = {
    english: string;
    transliteration: string;
    title: string;
    lettersWithinTitle: Letter[];
    wordsWithinTitle: Word[];
    index: number;
    numericalValue: number;
    language: string;
    estimatedDate: Date;
}

