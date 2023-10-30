import { NoteType } from "../enums/NoteType";
import { Letter } from "../types/Letter";
import { Note } from "../types/Note";
import hebrewWordsDict from "./hebrewWordsDict";

let createNote = (note: string, noteType = NoteType.info ): Note => {
  let newNote = {
    noteType: NoteType.info,
    note: note,
  } as Note;
  return newNote;
}
let cn = createNote;
let alephNotes = [
  {
    noteType: NoteType.info,
    note: "The first letter of the Aleph Bet",
  },
  {
    noteType: NoteType.info,
    note: "The third letter of the Torah ",
  },
  {
    noteType: NoteType.info,
    note: "Quiescent, as in, aleph does not always take a vowel",
  },
  {
    noteType: NoteType.info,
    note: "אלף (Alef)Looks to me like aleph looks like it could be pronounced elf. ",
  },
  {
    noteType: NoteType.info,
    note: "Ribosomes come in and out of existence (ephemeral) with the blueprint to life (DNA) at their fingertips. ",
  },
  {
    noteType: NoteType.info,
    note: "Ribosomes work with RNA that come from the nucleus, with messanger ribonucleic acid (mRNA), transfer RNA (tRNA), and ribosomal RNA (rRNA).",
  },
  {
    noteType: NoteType.info,
    note: "Machine elves. Ribosomes come in and out of existence (ephemeral, like machine elves) with the blueprint to life (DNA) at their fingertips. Ribosomes work with RNA come from the nucleus, with messanger ribonucleic acid (mRNA, machine elves are often reported as relaying messages), transfer RNA (tRNA machine elves reported as giving), and ribosomal RNA (rRNA machine elves reported as creating, such as what ribosomes do in the body). I think that our brains might be trying to make sense of fundamental truths. ",
  },
  {
    noteType: NoteType.info,
    note: "The interface as described in kabbalah",
  },
  {
    noteType: NoteType.info,
    note: "Two yods and a vav to compose it, the top right yod representing god. Yod is considered to be a divine point of energy. The vav symbolizes connection, attachment and unity. 10 + 10 + 6 ווו",
  },

];
const hebrewLetterDict = new Map<string, Letter>();

hebrewLetterDict.set("א", {
  index: 1,
  sound: "alef",
  word: "אלף", // The Hebrew word that the character represents
  numericalValue: 1,
  romanCharacter: "A",
  language: "Hebrew",
  altValue: 1,
  emoji: "🔘",
  letter: "א",
  final: "",
  notes: [cn("Divine Interface"), cn("Yod from above, yod from below, vav connecting them")],
});

// Set the key-value pair for Bet (ב)
hebrewLetterDict.set("ב", {
  index: 2,
  sound: "bet",
  word: "בית",
  numericalValue: 2,
  romanCharacter: "B",
  language: "Hebrew",
  altValue: 2,
  emoji: "🏕",
  letter: "ב",
  final: "",
  notes: [cn("First letter of the old testament, bereshit בראשית")]
});

// Set the key-value pair for Gimel (ג)
hebrewLetterDict.set("ג", {
  index: 3,
  sound: "gimel",
  word: "גמל",
  numericalValue: 3,
  romanCharacter: "G",
  language: "Hebrew",
  altValue: 3,
  emoji: "🐫",
  letter: "ג",
  final: "",
  notes: [cn("Camel, To Reward, To Give, To Wean")]
});

// Set the key-value pair for Daled (ד)
hebrewLetterDict.set("ד", {
  index: 4,
  sound: "daled",
  word: "דלת",
  numericalValue: 4,
  romanCharacter: "D",
  language: "Hebrew",
  altValue: 4,
  emoji: "🚪",
  letter: "ד",
  final: "",
  notes: [cn("Door, To Open, To Enter, To Hang")]
});

// Set the key-value pair for Hey (ה)
hebrewLetterDict.set("ה", {
  index: 5,
  sound: "hey",
  word: "הא",
  numericalValue: 5,
  romanCharacter: "H",
  language: "Hebrew",
  altValue: 5,
  emoji: "👋",
  letter: "ה",
  final: "",
  notes: [cn("Divine breath"),]
});

// Continue adding to the existing Map

// Set the key-value pair for Vav (ו)
hebrewLetterDict.set("ו", {
  index: 6,
  sound: "vav",
  word: "וו",
  numericalValue: 6,
  romanCharacter: "V",
  language: "Hebrew",
  altValue: 6,
  emoji: "🪝",
  letter: "ו",
  final: "",
  notes: [cn("Hook, Nail, To Add, To Secure")]
});

// Set the key-value pair for Zayin (ז)
hebrewLetterDict.set("ז", {
  index: 7,
  sound: "zayin",
  word: "זין",
  numericalValue: 7,
  romanCharacter: "Z",
  language: "Hebrew",
  altValue: 7,
  emoji: "🗡️",
  letter: "ז",
  final: "",
  notes: [cn("Weapon, To Cut, To Feed")]
});

// Set the key-value pair for Chet (ח)
hebrewLetterDict.set("ח", {
  index: 8,
  sound: "chet",
  word: "חית",
  numericalValue: 8,
  romanCharacter: "Ch",
  language: "Hebrew",
  altValue: 8,
  emoji: "🧬",
  letter: "ח",
  final: "",
  notes: [cn("Life, To Live, To Give Birth")]
});

// Set the key-value pair for Tet (ט)
hebrewLetterDict.set("ט", {
  index: 9,
  sound: "tet",
  word: "טית",
  numericalValue: 9,
  romanCharacter: "T",
  language: "Hebrew",
  altValue: 9,
  emoji: "🏺",
  letter: "ט",
  final: "",
  notes: [cn("Mud, clay, foundation")]
});
hebrewLetterDict.set("י", {
  index: 10,
  sound: "yud",
  word: "יוד",
  numericalValue: 10,
  romanCharacter: "Y",
  language: "Hebrew",
  altValue: 10,
  emoji: "✋",
  letter: "י",
  final: "",
  notes: [cn("Divine spark")],
});

// Set the key-value pair for Kaf (כ)
hebrewLetterDict.set("כ", {
  index: 11,
  sound: "kaf",
  word: "כף",
  numericalValue: 20,
  romanCharacter: "K",
  language: "Hebrew",
  altValue: 20,
  emoji: "🤲",
  letter: "כ",
  final: "ך",
  notes: [cn("Palm of the hand")]
});

// Set the key-value pair for Lamed (ל)
hebrewLetterDict.set("ל", {
  index: 12,
  sound: "lamed",
  word: "למד",
  numericalValue: 30,
  romanCharacter: "L",
  language: "Hebrew",
  altValue: 30,
  emoji: "🧑‍🦯",
  letter: "ל",
  final: "",
  notes: [cn("To Learn, To Teach")]
});

// Set the key-value pair for Mem (מ)
hebrewLetterDict.set("מ", {
  index: 13,
  sound: "mem",
  word: "מם",
  numericalValue: 40,
  romanCharacter: "M",
  language: "Hebrew",
  altValue: 40,
  emoji: "🌊",
  letter: "מ",
  final: "ם",
  notes: [cn("Water, chaos, source")]
});


// Set the key-value pair for Nun (נ)
hebrewLetterDict.set("נ", {
  index: 14,
  sound: "nun",
  word: "נון",
  numericalValue: 50,
  romanCharacter: "N",
  language: "Hebrew",
  altValue: 50,
  emoji: "🐠",
  letter: "נ",
  final: "ן",
  notes: [cn("Fish, life, activity")]
});

// Set the key-value pair for Samekh (ס)
hebrewLetterDict.set("ס", {
  index: 15,
  sound: "samekh",
  word: "סמך",
  numericalValue: 60,
  romanCharacter: "S",
  language: "Hebrew",
  altValue: 60,
  emoji: "🩼",
  letter: "ס",
  final: "",
  notes: [cn("Support, to lean on")]
});

// Set the key-value pair for Ayin (ע)
hebrewLetterDict.set("ע", {
  index: 16,
  sound: "ayin",
  word: "עין",
  numericalValue: 70,
  romanCharacter: "O",
  language: "Hebrew",
  altValue: 70,
  emoji: "👁",
  letter: "ע",
  final: "",
  notes: [cn("Eye, to see")]
});

// Set the key-value pair for Pey (פ)
hebrewLetterDict.set("פ", {
  index: 17,
  sound: "pey",
  word: "פה",
  numericalValue: 80,
  romanCharacter: "P",
  language: "Hebrew",
  altValue: 80,
  emoji: "👄",
  letter: "פ",
  final: "ף",
  notes: [cn("Mouth, to speak")]
});


// Set the key-value pair for Tsadi (צ)
hebrewLetterDict.set("צ", {
  index: 18,
  sound: "tsadi",
  word: "צדי",
  numericalValue: 90,
  romanCharacter: "Ts",
  language: "Hebrew",
  altValue: 90,
  emoji: "❤️",
  letter: "צ",
  final: "ץ",
  notes: [cn("Righteousness, side, hunt")]
});

// Set the key-value pair for Qof (ק)
hebrewLetterDict.set("ק", {
  index: 19,
  sound: "qof",
  word: "קוף",
  numericalValue: 100,
  romanCharacter: "Q",
  language: "Hebrew",
  altValue: 100,
  emoji: "🐒",
  letter: "ק",
  final: "",
  notes: [cn("Monkey, to follow")]
});

// Set the key-value pair for Resh (ר)
hebrewLetterDict.set("ר", {
  index: 20,
  sound: "resh",
  word: "ריש",
  numericalValue: 200,
  romanCharacter: "R",
  language: "Hebrew",
  altValue: 200,
  emoji: "💆",
  letter: "ר",
  final: "",
  notes: [cn("Head, to think, to begin")]
});

// Set the key-value pair for Shin (ש)
hebrewLetterDict.set("ש", {
  index: 21,
  sound: "shin",
  word: "שין",
  numericalValue: 300,
  romanCharacter: "Sh",
  language: "Hebrew",
  altValue: 300,
  emoji: "🦷",
  letter: "ש",
  final: "",
  notes: [cn("Tooth, to destroy, to consume")]
});
// Set the key-value pair for Tav (ת)
hebrewLetterDict.set("ת", {
  index: 22,
  sound: "tav",
  word: "תו",
  numericalValue: 400,
  romanCharacter: "T",
  language: "Hebrew",
  altValue: 400,
  emoji: "✝️",
  letter: "ת",
  final: "",
  notes: [cn("Cross, to seal, to sign")]
});


// To retrieve the value later, for example for Zayin
const zayinInfo = hebrewLetterDict.get("ז");
console.log(zayinInfo);



export default hebrewLetterDict;



