import { Letter } from "../types/Letter";

const hebrewDict = new Map<string, Letter>();
// hebrewDict.set("0", {
//   index: 404,
//   sound: "Tohu vaVohu",
//   letter: "תהו ובהו",
//   numericalValue: 404,
//   altValue: 404,
//   romanCharacter: "404",
//   names: "404",
//   final: "",
//   emoji: "",
//   language: "Hebrew"
// });
hebrewDict.set("1", {
  index: 1,
  sound: "silent",
  letter: "א",
  numericalValue: 1,
  altValue: 1000,
  romanCharacter: "A",
  names: "Aleph",
  final: "",
  emoji: "א",
  language: "Hebrew"
});
hebrewDict.set("ב", {
  index: 2,
  sound: "b, v",
  letter: "ב",
  numericalValue: 2,
  altValue: 0,
  final: "",
  romanCharacter: "B",
  names: "Beth",
  emoji: "🏠",
  language: "Hebrew"
});
hebrewDict.set("ג", {
  index: 3,
  sound: "g, gh",
  letter: "ג",
  numericalValue: 3,
  altValue: 0,
  final: "",
  romanCharacter: "G",
  names: "Gimel",
  emoji: "🐪",
  language: "Hebrew"
});

hebrewDict.set("ד", {
  index: 4,
  sound: "d, dh, th",
  letter: "ד",
  numericalValue: 4,
  altValue: 0,
  final: "",
  romanCharacter: "D",
  names: "Daleth",
  emoji: "🚪",
  language: "Hebrew"
});
hebrewDict.set("ה", {
  index: 5,
  sound: "h",
  letter: "ה",
  numericalValue: 5,
  altValue: 0,
  romanCharacter: "H",
  names: "He",
  final: "",
  emoji: "🪟",
  language: "Hebrew"
});

hebrewDict.set("ו", {
  index: 6,
  sound: "v, u, o",
  letter: "ו",
  numericalValue: 6,
  altValue: 0,
  final: "",
  romanCharacter: "V",
  names: "Vau",
  emoji: "🔨",
  language: "Hebrew"
});

hebrewDict.set("ז", {
  index: 7,
  sound: "z, dz",
  letter: "ז",
  numericalValue: 7,
  altValue: 0,
  final: "",
  romanCharacter: "Z",
  names: "Zayin",
  emoji: "🗡️",
  language: "Hebrew"
});

hebrewDict.set("ח", {
  index: 8,
  sound: "ch",
  letter: "ח",
  numericalValue: 8,
  altValue: 0,
  romanCharacter: "CH",
  names: "Cheth",
  final: "",
  emoji: "📦",
  language: "Hebrew"
});

hebrewDict.set("ט", {
  index: 9,
  sound: "t",
  letter: "ט",
  numericalValue: 9,
  altValue: 0,
  romanCharacter: "T",
  names: "Teth",
  final: "",
  emoji: "🐍",
  language: "Hebrew"
});

hebrewDict.set("י", {
  index: 10,
  sound: "i, y",
  letter: "י",
  numericalValue: 10,
  altValue: 0,
  romanCharacter: "I",
  names: "Yod",
  final: "",
  emoji: "✋",
  language: "Hebrew"
});

hebrewDict.set("כ", {
  index: 11,
  sound: "k, kh",
  letter: "כ",
  numericalValue: 20,
  altValue: 500,
  final: "ך",
  romanCharacter: "K",
  names: "Caph",
  emoji: "🫴",
  language: "Hebrew"
});

hebrewDict.set("ל", {
  index: 12,
  sound: "l",
  letter: "ל",
  numericalValue: 30,
  altValue: 0,
  romanCharacter: "L",
  names: "Lamed",
  final: "",
  emoji: "🏑",
  language: "Hebrew"
});

hebrewDict.set("מ", {
  index: 13,
  sound: "m",
  letter: "מ",
  numericalValue: 40,
  altValue: 600,
  final: "ם",
  romanCharacter: "M",
  names: "Mem",
  emoji: "💦",
  language: "Hebrew"
});

hebrewDict.set("ן", {
  index: 14,
  sound: "n",
  letter: "נ",
  numericalValue: 50,
  altValue: 700,
  final: "ן",
  romanCharacter: "N",
  names: "Nun",
  emoji: "🐟",
  language: "Hebrew"
});
hebrewDict.set("ס", {
  index: 15,
  sound: "s",
  letter: "ס",
  numericalValue: 60,
  altValue: 0,
  romanCharacter: "S",
  names: "Samekh",
  final: "",
  emoji: "🩼",
  language: "Hebrew"
});

hebrewDict.set("ע", {
  index: 16,
  sound: "O, aa, ng",
  letter: "ע",
  numericalValue: 70,
  altValue: 0,
  romanCharacter: "O",
  names: "Ayin",
  final: "",
  emoji: "👁",
  language: "Hebrew"
});

hebrewDict.set("ף", {
  index: 17,
  sound: "p, ph",
  letter: "פ",
  numericalValue: 80,
  altValue: 800,
  final: "ף",
  romanCharacter: "P",
  names: "Pe",
  emoji: "👄",
  language: "Hebrew"
});

hebrewDict.set("צ", {
  index: 18,
  sound: "ts, tz, j",
  letter: "צ",
  numericalValue: 90,
  altValue: 900,
  final: "ץ",
  romanCharacter: "TZ",
  names: "Tzaddi",
  emoji: "🎣",
  language: "Hebrew"
});

hebrewDict.set("ק", {
  index: 19,
  sound: "q, qh",
  letter: "ק",
  numericalValue: 100,
  altValue: 0,
  romanCharacter: "Q",
  names: "Qoph",
  final: "",
  emoji: "💆‍♂️",
  language: "Hebrew"
});

hebrewDict.set("ר", {
  index: 20,
  sound: "r",
  letter: "ר",
  numericalValue: 200,
  altValue: 0,
  romanCharacter: "R",
  names: "Resh",
  final: "",
  emoji: "🗣️",
  language: "Hebrew"
});
hebrewDict.set("ש", {
  index: 21,
  sound: "sh, s",
  letter: "ש",
  numericalValue: 300,
  altValue: 0,
  romanCharacter: "SH",
  names: "Shin",
  final: "",
  emoji: "🎣",
  language: "Hebrew"
});

hebrewDict.set("ת", {
  index: 22,
  sound: "th, t",
  letter: "ת",
  numericalValue: 400,
  altValue: 0,
  romanCharacter: "TH",
  names: "Tau",
  final: "",
  emoji: "✝️",
  language: "Hebrew"
});






export default hebrewDict;



