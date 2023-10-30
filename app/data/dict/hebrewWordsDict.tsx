
import { Word } from "../types/Word";

const hebrewWordsDict = new Map<string, Word>();
hebrewWordsDict.set("אלף", {
    index: 1,
    sound: "alef",
    word: "אלף",  // The Hebrew word that the character represents
    englishWord: "Thousand",
    meanings: ["Thousand", "First", "Unity"],  // Now a list of strings
    numericalValue: 1,
    romanCharacter: "A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 1,
    emoji: "🔘"
});

hebrewWordsDict.set("בית", {
    index: 2,
    sound: "bet/vet",
    meanings: ["Home", "Inside", "Family"],  // Now a list of strings
    word: "בית",  // Corrected the Hebrew word, removed the extra diacritic
    englishWord: "Home",
    numericalValue: 2,
    romanCharacter: "B/V",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 2,  // Corrected the alternative value
    emoji: "🏕"
});
hebrewWordsDict.set("גמל", {
    index: 3,
    sound: "gimel",
    word: "גמל",
    englishWord: "Camel",
    meanings: ["Camel", "To Reward", "To Wean"],
    numericalValue: 3,
    romanCharacter: "G",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 3,
    emoji: "🐫"
});

hebrewWordsDict.set("דלת", {
    index: 4,
    sound: "dalet",
    word: "דלת",
    englishWord: "Door",
    meanings: ["Door", "Entrance", "Poverty"],
    numericalValue: 4,
    romanCharacter: "D",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 4,
    emoji: "🚪"
});

hebrewWordsDict.set("היה", {
    index: 5,
    sound: "hey",
    word: "היה",
    englishWord: "Was",
    meanings: ["Was", "To Be", "Existence", "Divine breath", "Revelation", "Light"],
    numericalValue: 5,
    romanCharacter: "H",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 5,
    emoji: "👋"
});

hebrewWordsDict.set("וו", {
    index: 6,
    sound: "vav",
    word: "וו",
    englishWord: "Hook",
    meanings: ["Hook", "And", "Addition"],
    numericalValue: 6,
    romanCharacter: "V/W",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 6,
    emoji: "🪝"
});

hebrewWordsDict.set("זין", {
    index: 7,
    sound: "zayin",
    word: "זין",
    englishWord: "Weapon",
    meanings: ["Weapon", "Food", "Nourish"],
    numericalValue: 7,
    romanCharacter: "Z",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 7,
    emoji: "🗡️"
});

hebrewWordsDict.set("חית", {
    index: 8,
    sound: "chet",
    word: "חית",
    englishWord: "Life",
    meanings: ["Life", "Living", "Beast"],
    numericalValue: 8,
    romanCharacter: "Ch",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 8,
    emoji: "🧬"
});
hebrewWordsDict.set("טיט", {
    index: 9,
    sound: "tet",
    word: "טיט",
    englishWord: "Mud",
    meanings: ["Mud", "Clay", "Foundation"],
    numericalValue: 9,
    romanCharacter: "T",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 9,
    emoji: "🏺"
});

hebrewWordsDict.set("יוד", {
    index: 10,
    sound: "yud",
    word: "יוד",
    englishWord: "Hand",
    meanings: ["Hand", "Work", "Deed"],
    numericalValue: 10,
    romanCharacter: "Y",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 10,
    emoji: "✋"
});

hebrewWordsDict.set("כף", {
    index: 11,
    sound: "kaf",
    word: "כף",
    englishWord: "Palm",
    meanings: ["Palm", "Spoon", "Tame"],
    numericalValue: 20,
    romanCharacter: "K",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 20,
    emoji: "🤲"
});

hebrewWordsDict.set("למד", {
    index: 12,
    sound: "lamed",
    word: "למד",
    englishWord: "Teach",
    meanings: ["Teach", "Learn", "Study"],
    numericalValue: 30,
    romanCharacter: "L",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 30,
    emoji: "🧑‍🦯"
});

hebrewWordsDict.set("מים", {
    index: 13,
    sound: "mem",
    word: "מים",
    englishWord: "Water",
    meanings: ["Water", "Chaos", "Source"],
    numericalValue: 40,
    romanCharacter: "M",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 40,
    emoji: "🌊"
});

hebrewWordsDict.set("נון", {
    index: 14,
    sound: "nun",
    word: "נון",
    englishWord: "Fish",
    meanings: ["Fish", "Life", "Activity"],
    numericalValue: 50,
    romanCharacter: "N",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 50,
    emoji: "🐠"
});
hebrewWordsDict.set("סמך", {
    index: 15,
    sound: "samekh",
    word: "סמך",
    englishWord: "Support",
    meanings: ["Support", "Lean", "Depend"],
    numericalValue: 60,
    romanCharacter: "S",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 60,
    emoji: "🩼"
});

hebrewWordsDict.set("עין", {
    index: 16,
    sound: "ayin",
    word: "עין",
    englishWord: "Eye",
    meanings: ["Eye", "Well", "Fountain"],
    numericalValue: 70,
    romanCharacter: "none",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 70,
    emoji: "👁"
});

hebrewWordsDict.set("פה", {
    index: 17,
    sound: "peh",
    word: "פה",
    englishWord: "Mouth",
    meanings: ["Mouth", "Edge", "Opening"],
    numericalValue: 80,
    romanCharacter: "P",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 80,
    emoji: "👄"
});

hebrewWordsDict.set("צדי", {
    index: 18,
    sound: "tsadi",
    word: "צדי",
    englishWord: "Righteous",
    meanings: ["Righteous", "Side", "Hunt"],
    numericalValue: 90,
    romanCharacter: "Ts",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 90,
    emoji: "❤️"
});

hebrewWordsDict.set("קוף", {
    index: 19,
    sound: "qof",
    word: "קוף",
    englishWord: "Monkey",
    meanings: ["Monkey", "Circle", "Horizon"],
    numericalValue: 100,
    romanCharacter: "Q",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 100,
    emoji: "🐒"
});

hebrewWordsDict.set("ראש", {
    index: 20,
    sound: "resh",
    word: "ראש",
    englishWord: "Head",
    meanings: ["Head", "Top", "Beginning"],
    numericalValue: 200,
    romanCharacter: "R",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 200,
    emoji: "💆"
});

hebrewWordsDict.set("שין", {
    index: 21,
    sound: "shin",
    word: "שין",
    englishWord: "Tooth",
    meanings: ["Tooth", "Change", "Sharp"],
    numericalValue: 300,
    romanCharacter: "Sh",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 300,
    emoji: "🦷"
});

hebrewWordsDict.set("תו", {
    index: 22,
    sound: "tav",
    word: "תו",
    englishWord: "Mark",
    meanings: ["Mark", "Sign", "Covenant"],
    numericalValue: 400,
    romanCharacter: "T",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 400,
    emoji: "✝️"
});


hebrewWordsDict.set("בראשית", {
    index: 1,
    sound: "Bereshit",
    word: "בראשית",
    englishWord: "In the beginning",
    meanings: ["In the beginning", "At first", "Genesis"],
    numericalValue: 913,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 913,
    emoji: "🌍"
});

hebrewWordsDict.set("ברא", {
    index: 2,
    sound: "Bara",
    word: "ברא",
    englishWord: "Created",
    meanings: ["Created", "Formed", "Fashioned"],
    numericalValue: 203,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 203,
    emoji: "✨"
});

hebrewWordsDict.set("אלהים", {
    index: 3,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("את", {
    index: 4,
    sound: "Et",
    word: "את",
    englishWord: "Direct Object Marker",
    meanings: ["Direct Object Marker", "With", "Untranslatable"],
    numericalValue: 401,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 401,
    emoji: "➡️"
});

hebrewWordsDict.set("השמים", {
    index: 5,
    sound: "HaShamayim",
    word: "השמים",
    englishWord: "The Heavens",
    meanings: ["The Heavens", "Sky", "Firmament"],
    numericalValue: 395,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 395,
    emoji: "🌌"
});

hebrewWordsDict.set("ואת", {
    index: 6,
    sound: "Ve'et",
    word: "ואת",
    englishWord: "And",
    meanings: ["And", "Also", "Moreover"],
    numericalValue: 407,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 407,
    emoji: "➕"
});


hebrewWordsDict.set("הארץ", {
    index: 7,
    sound: "HaAretz",
    word: "הארץ",
    englishWord: "The Earth",
    meanings: ["The Earth", "Land", "Ground"],
    numericalValue: 296,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 296,
    emoji: "🌍"
});

hebrewWordsDict.set("והארץ", {
    index: 8,
    sound: "VeHaAretz",
    word: "והארץ",
    englishWord: "And the Earth",
    meanings: ["And the Earth", "And the Land", "And the Ground"],
    numericalValue: 302,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 302,
    emoji: "🌍➕"
});

hebrewWordsDict.set("היתה", {
    index: 9,
    sound: "Haytah",
    word: "היתה",
    englishWord: "Was",
    meanings: ["Was", "Existed", "Became"],
    numericalValue: 410,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 410,
    emoji: "🕰️"
});

hebrewWordsDict.set("תהו", {
    index: 10,
    sound: "Tohu",
    word: "תהו",
    englishWord: "Formless",
    meanings: ["Formless", "Chaos", "Waste"],
    numericalValue: 411,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 411,
    emoji: "🌫️"
});

hebrewWordsDict.set("ובהו", {
    index: 11,
    sound: "Vohu",
    word: "ובהו",
    englishWord: "Void",
    meanings: ["Void", "Emptiness", "Desolation"],
    numericalValue: 13,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 13,
    emoji: "🕳️"
});

hebrewWordsDict.set("וחושך", {
    index: 12,
    sound: "V'Choshekh",
    word: "וחושך",
    englishWord: "And Darkness",
    meanings: ["And Darkness", "Obscurity", "Ignorance"],
    numericalValue: 324,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 324,
    emoji: "🌑"
});

hebrewWordsDict.set("על", {
    index: 13,
    sound: "Al",
    word: "על",
    englishWord: "Upon",
    meanings: ["Upon", "Above", "Over"],
    numericalValue: 100,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 100,
    emoji: "⬆️"
});

hebrewWordsDict.set("פני", {
    index: 14,
    sound: "P'nei",
    word: "פני",
    englishWord: "Face",
    meanings: ["Face", "Surface", "Presence"],
    numericalValue: 130,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 130,
    emoji: "🙂"
});

hebrewWordsDict.set("תהום", {
    index: 15,
    sound: "Tehom",
    word: "תהום",
    englishWord: "Deep",
    meanings: ["Deep", "Abyss", "Chaos"],
    numericalValue: 451,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 451,
    emoji: "🌊"
});

hebrewWordsDict.set("ורוח", {
    index: 16,
    sound: "V'Ruach",
    word: "ורוח",
    englishWord: "And Spirit",
    meanings: ["And Spirit", "And Wind", "And Breath"],
    numericalValue: 220,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 220,
    emoji: "💨"
});

hebrewWordsDict.set("אלהים", {
    index: 17,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 86,
    emoji: "👑"
});



hebrewWordsDict.set("מרחפת", {
    index: 18,
    sound: "M'Rachefet",
    word: "מרחפת",
    englishWord: "Hovering",
    meanings: ["Hovering", "Fluttering", "Brooding"],
    numericalValue: 728,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 728,
    emoji: "🕊️"
});

hebrewWordsDict.set("על", {
    index: 19,
    sound: "Al",
    word: "על",
    englishWord: "Upon",
    meanings: ["Upon", "Above", "Over"],
    numericalValue: 100,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 100,
    emoji: "⬆️"
});

hebrewWordsDict.set("פני", {
    index: 20,
    sound: "P'nei",
    word: "פני",
    englishWord: "Face",
    meanings: ["Face", "Surface", "Presence"],
    numericalValue: 130,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 130,
    emoji: "🙂"
});

hebrewWordsDict.set("המים", {
    index: 21,
    sound: "HaMayim",
    word: "המים",
    englishWord: "The Waters",
    meanings: ["The Waters", "Oceans", "Seas"],
    numericalValue: 95,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 95,
    emoji: "🌊"
});

hebrewWordsDict.set("ויאמר", {
    index: 22,
    sound: "Vayomer",
    word: "ויאמר",
    englishWord: "And Said",
    meanings: ["And Said", "And Spoke", "And Declared"],
    numericalValue: 257,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 257,
    emoji: "🗨️"
});

hebrewWordsDict.set("אלהים", {
    index: 23,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 3,
    totalOccurenceCount: 3,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("יהי", {
    index: 24,
    sound: "Yehi",
    word: "יהי",
    englishWord: "Let there be",
    meanings: ["Let there be", "Shall be", "Become"],
    numericalValue: 20,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 20,
    emoji: "✨"
});

hebrewWordsDict.set("אור", {
    index: 25,
    sound: "Or",
    word: "אור",
    englishWord: "Light",
    meanings: ["Light", "Illumination", "Radiance"],
    numericalValue: 207,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 207,
    emoji: "💡"
});

hebrewWordsDict.set("ויהי", {
    index: 26,
    sound: "Vayehi",
    word: "ויהי",
    englishWord: "And there was",
    meanings: ["And there was", "And it came to pass", "And it happened"],
    numericalValue: 31,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 31,
    emoji: "🌟"
});

hebrewWordsDict.set("אור", {
    index: 27,
    sound: "Or",
    word: "אור",
    englishWord: "Light",
    meanings: ["Light", "Illumination", "Radiance"],
    numericalValue: 207,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 207,
    emoji: "💡"
});

hebrewWordsDict.set("וירא", {
    index: 28,
    sound: "Vayar",
    word: "וירא",
    englishWord: "And saw",
    meanings: ["And saw", "And observed", "And noticed"],
    numericalValue: 216,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 216,
    emoji: "👀"
});

hebrewWordsDict.set("אלהים", {
    index: 29,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 4,
    totalOccurenceCount: 4,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("כי", {
    index: 30,
    sound: "Ki",
    word: "כי",
    englishWord: "That",
    meanings: ["That", "Because", "For"],
    numericalValue: 30,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 30,
    emoji: "🔍"
});

hebrewWordsDict.set("טוב", {
    index: 31,
    sound: "Tov",
    word: "טוב",
    englishWord: "Good",
    meanings: ["Good", "Pleasant", "Fine"],
    numericalValue: 17,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 17,
    emoji: "👍"
});

hebrewWordsDict.set("ויבדל", {
    index: 32,
    sound: "Vayavdel",
    word: "ויבדל",
    englishWord: "And separated",
    meanings: ["And separated", "And divided", "And distinguished"],
    numericalValue: 42,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 42,
    emoji: "↔️"
});

hebrewWordsDict.set("את", {
    index: 33,
    sound: "Et",
    word: "את",
    englishWord: "The",
    meanings: ["The", "With", "Including"],
    numericalValue: 401,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 401,
    emoji: "🔗"
});

hebrewWordsDict.set("האור", {
    index: 34,
    sound: "HaOr",
    word: "האור",
    englishWord: "The Light",
    meanings: ["The Light", "The Illumination", "The Radiance"],
    numericalValue: 212,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 212,
    emoji: "💡"
});

hebrewWordsDict.set("מן", {
    index: 35,
    sound: "Min",
    word: "מן",
    englishWord: "From",
    meanings: ["From", "Out of", "Since"],
    numericalValue: 90,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 90,
    emoji: "🔽"
});

hebrewWordsDict.set("החושך", {
    index: 36,
    sound: "HaChoshekh",
    word: "החושך",
    englishWord: "The Darkness",
    meanings: ["The Darkness", "The Obscurity", "The Shadow"],
    numericalValue: 333,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 333,
    emoji: "🌑"
});

hebrewWordsDict.set("ויקרא", {
    index: 37,
    sound: "Vayikra",
    word: "ויקרא",
    englishWord: "And called",
    meanings: ["And called", "And named", "And proclaimed"],
    numericalValue: 327,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 327,
    emoji: "📣"
});

hebrewWordsDict.set("אלהים", {
    index: 38,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 5,
    totalOccurenceCount: 5,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("לאור", {
    index: 39,
    sound: "LaOr",
    word: "לאור",
    englishWord: "To Light",
    meanings: ["To Light", "Towards Light", "For Light"],
    numericalValue: 207,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 207,
    emoji: "💡"
});

hebrewWordsDict.set("יום", {
    index: 40,
    sound: "Yom",
    word: "יום",
    englishWord: "Day",
    meanings: ["Day", "Time", "Period"],
    numericalValue: 56,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 56,
    emoji: "🌞"
});

hebrewWordsDict.set("ולחושך", {
    index: 41,
    sound: "VeLaChoshekh",
    word: "ולחושך",
    englishWord: "And to Darkness",
    meanings: ["And to Darkness", "And to Obscurity", "And to Shadow"],
    numericalValue: 350,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 350,
    emoji: "🌑"
});

hebrewWordsDict.set("קרא", {
    index: 42,
    sound: "Kara",
    word: "קרא",
    englishWord: "Called",
    meanings: ["Called", "Named", "Proclaimed"],
    numericalValue: 301,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 301,
    emoji: "📣"
});

hebrewWordsDict.set("לילה", {
    index: 43,
    sound: "Laila",
    word: "לילה",
    englishWord: "Night",
    meanings: ["Night", "Darkness", "Evening"],
    numericalValue: 75,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 75,
    emoji: "🌙"
});

hebrewWordsDict.set("ויהי", {
    index: 44,
    sound: "Vayehi",
    word: "ויהי",
    englishWord: "And there was",
    meanings: ["And there was", "And it came to pass", "And it happened"],
    numericalValue: 31,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 31,
    emoji: "🌟"
});

hebrewWordsDict.set("ערב", {
    index: 45,
    sound: "Erev",
    word: "ערב",
    englishWord: "Evening",
    meanings: ["Evening", "Dusk", "Twilight"],
    numericalValue: 272,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 272,
    emoji: "🌆"
});

hebrewWordsDict.set("ויהי", {
    index: 46,
    sound: "Vayehi",
    word: "ויהי",
    englishWord: "And there was",
    meanings: ["And there was", "And it came to pass", "And it happened"],
    numericalValue: 31,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 3,
    totalOccurenceCount: 3,
    altValue: 31,
    emoji: "🌟"
});

hebrewWordsDict.set("בקר", {
    index: 47,
    sound: "Boker",
    word: "בקר",
    englishWord: "Morning",
    meanings: ["Morning", "Dawn", "Daybreak"],
    numericalValue: 302,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 302,
    emoji: "🌅"
});

hebrewWordsDict.set("יום", {
    index: 48,
    sound: "Yom",
    word: "יום",
    englishWord: "Day",
    meanings: ["Day", "Time", "Period"],
    numericalValue: 56,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 56,
    emoji: "🌞"
});

hebrewWordsDict.set("אחד", {
    index: 49,
    sound: "Echad",
    word: "אחד",
    englishWord: "One",
    meanings: ["One", "Single", "First"],
    numericalValue: 13,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 13,
    emoji: "1️⃣"
});

hebrewWordsDict.set("ויאמר", {
    index: 50,
    sound: "Vayomer",
    word: "ויאמר",
    englishWord: "And said",
    meanings: ["And said", "And spoke", "And declared"],
    numericalValue: 257,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 257,
    emoji: "🗨️"
});

hebrewWordsDict.set("אלהים", {
    index: 51,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 6,
    totalOccurenceCount: 6,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("יהי", {
    index: 52,
    sound: "Yehi",
    word: "יהי",
    englishWord: "Let there be",
    meanings: ["Let there be", "May there be", "There shall be"],
    numericalValue: 20,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 20,
    emoji: "✨"
});

hebrewWordsDict.set("רקיע", {
    index: 53,
    sound: "Raki'a",
    word: "רקיע",
    englishWord: "Firmament",
    meanings: ["Firmament", "Expanse", "Sky"],
    numericalValue: 380,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 380,
    emoji: "🌌"
});

hebrewWordsDict.set("בתוך", {
    index: 54,
    sound: "Betokh",
    word: "בתוך",
    englishWord: "Within",
    meanings: ["Within", "Inside", "Amidst"],
    numericalValue: 430,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 430,
    emoji: "🔽"
});

hebrewWordsDict.set("המים", {
    index: 55,
    sound: "HaMayim",
    word: "המים",
    englishWord: "The Waters",
    meanings: ["The Waters", "The Liquid", "The Fluid"],
    numericalValue: 95,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 95,
    emoji: "💧"
});

hebrewWordsDict.set("ויהי", {
    index: 56,
    sound: "Vayehi",
    word: "ויהי",
    englishWord: "And there was",
    meanings: ["And there was", "And it came to pass", "And it happened"],
    numericalValue: 31,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 4,
    totalOccurenceCount: 4,
    altValue: 31,
    emoji: "🌟"
});

hebrewWordsDict.set("כן", {
    index: 57,
    sound: "Ken",
    word: "כן",
    englishWord: "So",
    meanings: ["So", "Thus", "Indeed"],
    numericalValue: 70,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 70,
    emoji: "✔️"
});

hebrewWordsDict.set("ויבדל", {
    index: 58,
    sound: "Vayavdel",
    word: "ויבדל",
    englishWord: "And separated",
    meanings: ["And separated", "And divided", "And distinguished"],
    numericalValue: 50,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 50,
    emoji: "↔️"
});

hebrewWordsDict.set("אלהים", {
    index: 59,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 7,
    totalOccurenceCount: 7,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("בין", {
    index: 60,
    sound: "Bein",
    word: "בין",
    englishWord: "Between",
    meanings: ["Between", "Among", "Within"],
    numericalValue: 62,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 62,
    emoji: "🔀"
});

hebrewWordsDict.set("הרקיע", {
    index: 61,
    sound: "HaRaki'a",
    word: "הרקיע",
    englishWord: "The Firmament",
    meanings: ["The Firmament", "The Expanse", "The Sky"],
    numericalValue: 385,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 385,
    emoji: "🌌"
});

hebrewWordsDict.set("ובין", {
    index: 62,
    sound: "U'Bein",
    word: "ובין",
    englishWord: "And between",
    meanings: ["And between", "And among", "And within"],
    numericalValue: 70,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 70,
    emoji: "🔀"
});

hebrewWordsDict.set("המים", {
    index: 63,
    sound: "HaMayim",
    word: "המים",
    englishWord: "The Waters",
    meanings: ["The Waters", "The Liquid", "The Fluid"],
    numericalValue: 95,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 95,
    emoji: "💧"
});

hebrewWordsDict.set("אשר", {
    index: 64,
    sound: "Asher",
    word: "אשר",
    englishWord: "Which",
    meanings: ["Which", "That", "Who"],
    numericalValue: 501,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 501,
    emoji: "🔍"
});

hebrewWordsDict.set("מתחת", {
    index: 65,
    sound: "Mitakhat",
    word: "מתחת",
    englishWord: "Beneath",
    meanings: ["Beneath", "Under", "Below"],
    numericalValue: 848,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 848,
    emoji: "⬇️"
});

hebrewWordsDict.set("לרקיע", {
    index: 66,
    sound: "LaRaki'a",
    word: "לרקיע",
    englishWord: "To the Firmament",
    meanings: ["To the Firmament", "To the Expanse", "To the Sky"],
    numericalValue: 390,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 390,
    emoji: "🌌"
});

hebrewWordsDict.set("מן", {
    index: 67,
    sound: "Min",
    word: "מן",
    englishWord: "From",
    meanings: ["From", "Out of", "Since"],
    numericalValue: 90,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 90,
    emoji: "🔙"
});

hebrewWordsDict.set("המים", {
    index: 68,
    sound: "HaMayim",
    word: "המים",
    englishWord: "The Waters",
    meanings: ["The Waters", "The Liquid", "The Fluid"],
    numericalValue: 95,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 3,
    totalOccurenceCount: 3,
    altValue: 95,
    emoji: "💧"
});

hebrewWordsDict.set("אשר", {
    index: 69,
    sound: "Asher",
    word: "אשר",
    englishWord: "Which",
    meanings: ["Which", "That", "Who"],
    numericalValue: 501,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 501,
    emoji: "🔍"
});

hebrewWordsDict.set("מעל", {
    index: 70,
    sound: "Me'al",
    word: "מעל",
    englishWord: "Above",
    meanings: ["Above", "Over", "Beyond"],
    numericalValue: 140,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 140,
    emoji: "⬆️"
});

hebrewWordsDict.set("לרקיע", {
    index: 71,
    sound: "LaRaki'a",
    word: "לרקיע",
    englishWord: "To the Firmament",
    meanings: ["To the Firmament", "To the Expanse", "To the Sky"],
    numericalValue: 390,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 390,
    emoji: "🌌"
});

hebrewWordsDict.set("ויהי", {
    index: 72,
    sound: "Vayehi",
    word: "ויהי",
    englishWord: "And there was",
    meanings: ["And there was", "And it came to pass", "And it happened"],
    numericalValue: 31,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 5,
    totalOccurenceCount: 5,
    altValue: 31,
    emoji: "🌟"
});

hebrewWordsDict.set("כן", {
    index: 73,
    sound: "Ken",
    word: "כן",
    englishWord: "So",
    meanings: ["So", "Thus", "Indeed"],
    numericalValue: 70,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 70,
    emoji: "✔️"
});

hebrewWordsDict.set("וירא", {
    index: 74,
    sound: "Vayare",
    word: "וירא",
    englishWord: "And saw",
    meanings: ["And saw", "And observed", "And noticed"],
    numericalValue: 217,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 217,
    emoji: "👀"
});

hebrewWordsDict.set("אלהים", {
    index: 75,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 8,
    totalOccurenceCount: 8,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("כי", {
    index: 76,
    sound: "Ki",
    word: "כי",
    englishWord: "That",
    meanings: ["That", "Because", "For"],
    numericalValue: 30,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 30,
    emoji: "🔍"
});

hebrewWordsDict.set("טוב", {
    index: 77,
    sound: "Tov",
    word: "טוב",
    englishWord: "Good",
    meanings: ["Good", "Pleasant", "Fine"],
    numericalValue: 17,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 17,
    emoji: "👍"
});

hebrewWordsDict.set("ויבדל", {
    index: 78,
    sound: "Vayavdel",
    word: "ויבדל",
    englishWord: "And separated",
    meanings: ["And separated", "And divided", "And distinguished"],
    numericalValue: 50,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 50,
    emoji: "↔️"
});

hebrewWordsDict.set("אלהים", {
    index: 79,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 9,
    totalOccurenceCount: 9,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("בין", {
    index: 80,
    sound: "Bein",
    word: "בין",
    englishWord: "Between",
    meanings: ["Between", "Among", "Within"],
    numericalValue: 62,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 62,
    emoji: "🔀"
});

hebrewWordsDict.set("האור", {
    index: 81,
    sound: "HaOr",
    word: "האור",
    englishWord: "The Light",
    meanings: ["The Light", "The Illumination", "The Radiance"],
    numericalValue: 212,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 212,
    emoji: "💡"
});
hebrewWordsDict.set("ובין", {
    index: 82,
    sound: "U'Vein",
    word: "ובין",
    englishWord: "And Between",
    meanings: ["And Between", "And Among", "And Within"],
    numericalValue: 64,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 64,
    emoji: "🔀"
});

hebrewWordsDict.set("החושך", {
    index: 83,
    sound: "HaKhoshekh",
    word: "החושך",
    englishWord: "The Darkness",
    meanings: ["The Darkness", "The Obscurity", "The Gloom"],
    numericalValue: 324,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 324,
    emoji: "🌑"
});

hebrewWordsDict.set("ויקרא", {
    index: 84,
    sound: "Vayikra",
    word: "ויקרא",
    englishWord: "And Called",
    meanings: ["And Called", "And Named", "And Designated"],
    numericalValue: 321,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 321,
    emoji: "📣"
});

hebrewWordsDict.set("אלהים", {
    index: 85,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 10,
    totalOccurenceCount: 10,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("לאור", {
    index: 86,
    sound: "LaOr",
    word: "לאור",
    englishWord: "To Light",
    meanings: ["To Light", "To Illuminate", "To Brighten"],
    numericalValue: 247,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 247,
    emoji: "💡"
});

hebrewWordsDict.set("יום", {
    index: 87,
    sound: "Yom",
    word: "יום",
    englishWord: "Day",
    meanings: ["Day", "Time", "Period"],
    numericalValue: 56,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 56,
    emoji: "🌞"
});

hebrewWordsDict.set("ולחושך", {
    index: 88,
    sound: "VeLaKhoshekh",
    word: "ולחושך",
    englishWord: "And To Darkness",
    meanings: ["And To Darkness", "And To Obscurity", "And To Gloom"],
    numericalValue: 344,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 344,
    emoji: "🌑"
});

hebrewWordsDict.set("קרא", {
    index: 89,
    sound: "Kara",
    word: "קרא",
    englishWord: "Called",
    meanings: ["Called", "Named", "Designated"],
    numericalValue: 301,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 301,
    emoji: "📣"
});

hebrewWordsDict.set("לילה", {
    index: 90,
    sound: "Laila",
    word: "לילה",
    englishWord: "Night",
    meanings: ["Night", "Evening", "Darkness"],
    numericalValue: 75,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 75,
    emoji: "🌙"
});

hebrewWordsDict.set("ויהי", {
    index: 91,
    sound: "Vayehi",
    word: "ויהי",
    englishWord: "And there was",
    meanings: ["And there was", "And it came to pass", "And it happened"],
    numericalValue: 31,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 6,
    totalOccurenceCount: 6,
    altValue: 31,
    emoji: "🌟"
});




hebrewWordsDict.set("ערב", {
    index: 92,
    sound: "Erev",
    word: "ערב",
    englishWord: "Evening",
    meanings: ["Evening", "Dusk", "Twilight"],
    numericalValue: 272,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 272,
    emoji: "🌆"
});

hebrewWordsDict.set("ובוקר", {
    index: 93,
    sound: "U'Voker",
    word: "ובוקר",
    englishWord: "And Morning",
    meanings: ["And Morning", "And Dawn", "And Daybreak"],
    numericalValue: 210,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 210,
    emoji: "🌅"
});

hebrewWordsDict.set("יום", {
    index: 94,
    sound: "Yom",
    word: "יום",
    englishWord: "Day",
    meanings: ["Day", "Time", "Period"],
    numericalValue: 56,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 2,
    totalOccurenceCount: 2,
    altValue: 56,
    emoji: "🌞"
});

hebrewWordsDict.set("אחד", {
    index: 95,
    sound: "Echad",
    word: "אחד",
    englishWord: "One",
    meanings: ["One", "Single", "First"],
    numericalValue: 13,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 13,
    emoji: "1️⃣"
});

hebrewWordsDict.set("ויאמר", {
    index: 96,
    sound: "Vayomer",
    word: "ויאמר",
    englishWord: "And Said",
    meanings: ["And Said", "And Spoke", "And Declared"],
    numericalValue: 257,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 257,
    emoji: "🗨️"
});

hebrewWordsDict.set("אלהים", {
    index: 97,
    sound: "Elohim",
    word: "אלהים",
    englishWord: "God",
    meanings: ["God", "Deity", "Divine"],
    numericalValue: 86,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 11,
    totalOccurenceCount: 11,
    altValue: 86,
    emoji: "👑"
});

hebrewWordsDict.set("יהי", {
    index: 98,
    sound: "Yehi",
    word: "יהי",
    englishWord: "Let There Be",
    meanings: ["Let There Be", "May There Be", "There Shall Be"],
    numericalValue: 20,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 20,
    emoji: "✨"
});

hebrewWordsDict.set("רקיע", {
    index: 99,
    sound: "Raki'a",
    word: "רקיע",
    englishWord: "Firmament",
    meanings: ["Firmament", "Expanse", "Sky"],
    numericalValue: 380,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 380,
    emoji: "🌌"
});

hebrewWordsDict.set("בתוך", {
    index: 100,
    sound: "BeToch",
    word: "בתוך",
    englishWord: "In the Midst",
    meanings: ["In the Midst", "Among", "Within"],
    numericalValue: 430,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 430,
    emoji: "🔵"
});

hebrewWordsDict.set("המים", {
    index: 101,
    sound: "HaMayim",
    word: "המים",
    englishWord: "The Waters",
    meanings: ["The Waters", "The Oceans", "The Seas"],
    numericalValue: 95,
    romanCharacter: "N/A",
    language: "Hebrew",
    currentOccurenceCount: 1,
    totalOccurenceCount: 1,
    altValue: 95,
    emoji: "🌊"
});



export default hebrewWordsDict;



