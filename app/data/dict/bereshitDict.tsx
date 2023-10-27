import hebrewDict from "./hebrewDict";
import { Chapter } from "../types/Chapter";
import { Letter } from "../types/Letter";
import { Word } from "../types/Word";

let hebrewTitle = "בראשית";

let bayit: Word = {
    altValue: 0,
    currentOccurenceCount: 1,
    emoji: "",
    index: 1,
    sound: "Buy it",
    word: "בית",
    totalOccurenceCount: 0,
    numericalValue: 0,
    romanCharacter: "House",
    names: "House, home, family, tribe, human body, void, hole, version, house of knowledge",
    language: "Hebrew"

}
let bereshitDict: Map<number, Chapter> = new Map<number, Chapter>();
bereshitDict.set(1, {
    english: "Genesis",
    transliteration: "Bereshit",
    title: hebrewTitle,
    lettersWithinTitle: Array.from(hebrewTitle).map((item, index) => hebrewDict.has(item) ? hebrewDict.get(item) : hebrewDict.values().next().value),
    wordsWithinTitle: [bayit],
    index: 1,
    numericalValue: 1,
    language: "hebrew",
    estimatedDate: new Date()
});

export default bereshitDict;