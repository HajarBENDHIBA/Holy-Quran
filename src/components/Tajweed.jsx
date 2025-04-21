import React, { useState } from 'react';
import tajwidImage from '../assets/tajwid.jpg';

const Tajweed = () => {
  const [selectedRule, setSelectedRule] = useState(null);

  const tajweedRules = [
    {
      id: 1,
      category: "مَدّ (Madd)",
      title: "المَدّ الطَّبِيعِي",
      titleEnglish: "Natural Extension",
      arabic: "هو إطالة الصوت بمقدار حركتين عند النطق بحرف المد",
      english: "It is lengthening the sound by two counts when pronouncing a letter of elongation",
      examples: [
        { text: ["ق", "َ", "ا", "ل", "َ"], highlight: [2], translation: "He said" },
        { text: ["ي", "َ", "ق", "ُ", "و", "ل", "ُ"], highlight: [4], translation: "He says" },
        { text: ["ف", "ِ", "ي"], highlight: [2], translation: "In" },
        { text: ["ن", "ُ", "و", "ح", "ِ", "ي", "ه", "َ", "ا"], highlight: [2], translation: "We reveal it" },
        { text: ["ك", "ِ", "ي", "د", "ُ", "و", "ن", "ِ"], highlight: [2], translation: "Plot against me" }
      ],
      explanation: "The natural extension occurs with the three letters of madd: ا (alif) preceded by fatha, و (waw) preceded by damma, and ي (ya) preceded by kasra.",
      color: "#FF0000",
      letterColor: "#FF4081"
    },
    {
      id: 2,
      category: "غُنَّة (Ghunnah)",
      title: "الغُنَّة",
      titleEnglish: "Nasalization",
      arabic: "صوت له رنين يخرج من الخيشوم عند النطق بحرف النون أو الميم",
      english: "A sound with resonance that comes from the nasal passage when pronouncing noon or meem",
      examples: [
        { text: ["إِ", "نَّ"], highlight: [1], translation: "Indeed" },
        { text: ["ثُ", "مَّ"], highlight: [1], translation: "Then" },
        { text: ["مِ", "مَّ", "ا"], highlight: [1], translation: "From what" },
        { text: ["عَ", "مَّ"], highlight: [1], translation: "About what" },
        { text: ["أَ", "مَّ", "ا"], highlight: [1], translation: "As for" }
      ],
      explanation: "Ghunnah is applied to noon and meem when they have shaddah, with a duration of two counts.",
      color: "#00FF00",
      letterColor: "#4CAF50"
    },
    {
      id: 3,
      category: "إدغام (Idgham)",
      title: "الإدغام المُتَمَاثِلَين",
      titleEnglish: "Complete Merging of Similar Letters",
      arabic: "إدخال حرف ساكن في حرف متحرك بحيث يصيران حرفاً واحداً مشدداً",
      english: "Merging a letter with sukoon into a similar moving letter, resulting in a single emphasized letter",
      examples: [
        { text: ["اِ", "ذْ", " ", "ذَ", "هَ", "بَ", " ", "→", " ", "اِ", "ذَّ", "هَ", "بَ"], highlight: [1, 3, 10, 11], translation: "When he went" },
        { text: ["قُ", "لْ", " ", "لَ", "هُ", "مْ", " ", "→", " ", "قُ", "لَّ", "هُ", "مْ"], highlight: [1, 3, 10, 11], translation: "Say to them" },
        { text: ["بَ", "لْ", " ", "لَ", "ا", " ", "→", " ", "بَ", "لَّ", "ا"], highlight: [1, 3, 9, 10], translation: "Rather, no" },
        { text: ["هَ", "لْ", " ", "لَ", "كَ", " ", "→", " ", "هَ", "لَّ", "كَ"], highlight: [1, 3, 9, 10], translation: "Is there for you" },
        { text: ["مَ", "نْ", " ", "نَ", "ذِ", "يْ", "رٍ", " ", "→", " ", "مَ", "نَّ", "ذِ", "يْ", "رٍ"], highlight: [1, 3, 11, 12], translation: "Any warner" }
      ],
      explanation: "When two identical letters meet, the first with sukoon and the second with harakah, they merge into one emphasized letter.",
      color: "#0000FF",
      letterColor: "#2196F3"
    },
    {
      id: 4,
      category: "إخفاء (Ikhfa)",
      title: "الإخفاء الحَقِيقِي",
      titleEnglish: "True Concealment",
      arabic: "النطق بالنون الساكنة أو التنوين بصفة بين الإظهار والإدغام",
      english: "Pronouncing the noon sakinah or tanween in a state between clear pronunciation and complete merging",
      examples: [
        { text: ["مِ", "نْ", " ", "كُ", "لِّ"], highlight: [1], translation: "From every" },
        { text: ["عَ", "ذَ", "ا", "بٌ", " ", "شَ", "دِ", "يْ", "دٌ"], highlight: [3, 8], translation: "Severe punishment" },
        { text: ["مِ", "نْ", " ", "قَ", "بْ", "لُ"], highlight: [1], translation: "Before" },
        { text: ["أَ", "نْ", " ", "تَ", "قُ", "وْ", "لَ"], highlight: [1], translation: "That you say" },
        { text: ["مَ", "نْ", " ", "صَ", "بَ", "رَ"], highlight: [1], translation: "Whoever is patient" }
      ],
      explanation: "Occurs when noon sakinah or tanween is followed by any of the 15 letters of ikhfa: (ث، ج، د، ذ، ز، س، ش، ص، ض، ط، ظ، ف، ق، ك)",
      color: "#800080",
      letterColor: "#9C27B0"
    },
    {
      id: 5,
      category: "قَلقَلة (Qalqalah)",
      title: "القَلقَلة",
      titleEnglish: "Echo/Bouncing Sound",
      arabic: "اضطراب الصوت عند النطق بالحرف الساكن حتى يسمع له نبرة قوية",
      english: "A vibration in sound when pronouncing a specific letter with sukoon, producing a strong bounce",
      examples: [
        { text: ["قُ", "طْ", "بْ"], highlight: [0, 1, 2], translation: "Pole" },
        { text: ["يَ", "جْ", "عَ", "لْ"], highlight: [1, 3], translation: "He makes" },
        { text: ["أَ", "حَ", "دْ"], highlight: [2], translation: "One" },
        { text: ["يَ", "خْ", "رُ", "جْ"], highlight: [3], translation: "He exits" },
        { text: ["أَ", "بْ", "تَ", "رْ"], highlight: [1], translation: "Cut off" }
      ],
      explanation: "Applied to five letters (ق ط ب ج د) when they have sukoon or are at the end of a word.",
      color: "#FFA500",
      letterColor: "#FF9800"
    },
    {
      id: 6,
      category: "إظهار (Idh-har)",
      title: "الإظهار الحَلقِي",
      titleEnglish: "Throat Manifestation",
      arabic: "إخراج كل حرف من مخرجه من غير غنة في النون الساكنة والتنوين",
      english: "Pronouncing each letter from its proper point of articulation without nasalization in noon sakinah and tanween",
      examples: [
        { text: ["مِ", "نْ", " ", "هَ", "ا", "دٍ"], highlight: [1, 3], translation: "Any guide" },
        { text: ["عَ", "لِ", "يْ", "مٌ", " ", "حَ", "كِ", "يْ", "مٌ"], highlight: [3, 8], translation: "All-Knowing, All-Wise" },
        { text: ["مِ", "نْ", " ", "عِ", "لْ", "مٍ"], highlight: [1, 3], translation: "Of knowledge" },
        { text: ["مَ", "نْ", " ", "ءَ", "ا", "مَ", "نَ"], highlight: [1, 3], translation: "Whoever believes" },
        { text: ["مِ", "نْ", " ", "خَ", "يْ", "رٍ"], highlight: [1, 3], translation: "Of good" }
      ],
      explanation: "Occurs when noon sakinah or tanween is followed by any of the six throat letters (ء ه ع ح غ خ).",
      color: "#008080",
      letterColor: "#009688"
    },
    {
      id: 7,
      category: "تَفخِيم (Tafkheem)",
      title: "التَفخِيم",
      titleEnglish: "Heavy Pronunciation",
      arabic: "سِمَنٌ يدخل على صوت الحرف فيمتلئ الفم بصداه",
      english: "A heaviness that enters the sound of the letter, filling the mouth with its echo",
      examples: [
        { text: ["صَ", "لَ", "ا", "ة"], highlight: [0], translation: "Prayer" },
        { text: ["طَ", "ا", "رِ", "ق"], highlight: [0], translation: "Night-comer" },
        { text: ["ضَ", "رَ", "بَ"], highlight: [0], translation: "He struck" },
        { text: ["ظَ", "لَ", "مَ"], highlight: [0], translation: "He wronged" },
        { text: ["قُ", "رْ", "آ", "ن"], highlight: [0], translation: "Quran" }
      ],
      explanation: "Applied to specific letters (ص ض ط ظ خ غ ق) and in certain cases to the letter ر and ل.",
      color: "#4B0082",
      letterColor: "#673AB7"
    },
    {
      id: 8,
      category: "مَدّ (Madd)",
      title: "المَدّ المُتَّصِل",
      titleEnglish: "Connected Extension",
      arabic: "أن يأتي حرف المد وبعده همزة في كلمة واحدة",
      english: "When a madd letter is followed by a hamzah in the same word",
      examples: [
        { text: ["جَ", "ا", "ءَ"], highlight: [1, 2], translation: "He came" },
        { text: ["سُ", "و", "ءَ"], highlight: [1, 2], translation: "Evil" },
        { text: ["سَ", "مَ", "ا", "ءً"], highlight: [2, 3], translation: "Sky" },
        { text: ["شَ", "ا", "ءَ"], highlight: [1, 2], translation: "He willed" },
        { text: ["سِ", "ي", "ءَ"], highlight: [1, 2], translation: "Was made evil" }
      ],
      explanation: "Must be extended for 4-5 counts due to the connected hamzah.",
      color: "#FF1493",
      letterColor: "#E91E63"
    }
  ];

  return (
    <div className="pt-20 pb-12">
      <h1 className="text-5xl font-bold text-center my-12 text-[#2C646C]">Learn Tajweed</h1>
      
      <div className="px-6 max-w-7xl mx-auto">
        <div className="mb-12 flex justify-center">
          <img 
            src={tajwidImage} 
            alt="Tajweed Rules Overview" 
            className="rounded-4xl shadow-md max-w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-1 gap-8">
          {tajweedRules.map((rule) => (
            <div 
              key={rule.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-semibold text-[#3F8D98]">
                    {rule.category}
                  </h2>
                  <span 
                    className="inline-block w-4 h-4 rounded-full ml-2" 
                    style={{ backgroundColor: rule.color }}
                  />
                </div>
                <h3 className="text-xl mb-1">
                  <span className="font-arabic">{rule.title}</span>
                  <span className="text-gray-600 ml-2">({rule.titleEnglish})</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-arabic text-right leading-loose mb-2">
                    {rule.arabic}
                  </p>
                  <p className="text-gray-600">
                    {rule.english}
                  </p>
                </div>
                <div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-[#3F8D98] mb-2">Examples:</p>
                    <div className="space-y-2">
                      {rule.examples.map((example, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="font-arabic text-lg">
                            {example.text.map((letter, letterIndex) => (
                              <span
                                key={letterIndex}
                                style={{
                                  color: example.highlight.includes(letterIndex) ? rule.letterColor : 'inherit'
                                }}
                              >
                                {letter}
                              </span>
                            ))}
                          </span>
                          <span className="text-sm text-gray-600 italic">{example.translation}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-4">{rule.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tajweed; 