import { Note } from "./Note";
import { Word } from "./Word";

export type Letter = {
    index: number;
    sound: string;
    letter: string;
    final: string;
    numericalValue: number;
    altValue: number;
    romanCharacter: string;
    emoji: string;
    language: string;
    notes: Note[];
    word: string;

}