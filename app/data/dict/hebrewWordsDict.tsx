import { Letter } from "../types/Letter";
import { Word } from "../types/Word";

const hebrewDict = new Map<string, Word>();
hebrewDict.set("א", {
    index: 1,

    sound: "bayt",
    word: "ב",
    numericalValue: 2,
    romanCharacter: "B/V",
    names: "Beth, bayt, bet, vet",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 1,
    emoji: ""
});
hebrewDict.set("ר", {
    index: 2,
    sound: "R",
    word: "ר",
    numericalValue: 20,
    romanCharacter: "R",
    names: "Resh",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 1,
    emoji: ""
});
hebrewDict.set("א", {
    index: 3,

    sound: "aleph",
    word: "א",
    numericalValue: 1,
    romanCharacter: "B/V",
    names: "Teacher, wondrous, one, I, Lord",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 1,
    emoji: ""
});
hebrewDict.set("ש", {
    index: 4,

    sound: "sin/shin",
    word: "ש",
    numericalValue: 2,
    romanCharacter: "B/V",
    names: "",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 1,
    emoji: ""
});
hebrewDict.set("י", {
    index: 5,

    sound: "yod",
    word: "י",
    numericalValue: 2,
    romanCharacter: "y",
    names: "Palm, hand",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 1,
    emoji: ""
});
hebrewDict.set("ת", {
    index: 6,

    sound: "Tav",
    word: "ת",
    numericalValue: 2,
    romanCharacter: "T",
    names: "Cross",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 1,
    emoji: ""
});

export default hebrewDict;



