import React from 'react';
import { Link } from 'react-router-dom';

const DailyDuas = () => {
  const duas = [
    {
      category: "Morning Duas",
      items: [
        {
          id: 1,
          arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
          translation: "We have reached the morning and at this very time unto Allah belongs all sovereignty",
          transliteration: "Asbahna wa asbahal mulku lillah",
          when: "When waking up"
        },
        {
          id: 2,
          arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
          translation: "O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening",
          transliteration: "Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan nushur",
          when: "Morning remembrance"
        }
      ]
    },
    {
      category: "Eating Duas",
      items: [
        {
          id: 3,
          arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
          translation: "In the name of Allah and with the blessings of Allah",
          transliteration: "Bismillahi wa ala barakatillah",
          when: "Before eating"
        },
        {
          id: 4,
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
          translation: "All praise is due to Allah who fed me this and provided it for me",
          transliteration: "Alhamdulillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwatin",
          when: "After eating"
        }
      ]
    },
    {
      category: "Sleeping Duas",
      items: [
        {
          id: 5,
          arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          translation: "In Your name, O Allah, I die and I live",
          transliteration: "Bismika Allahumma amutu wa ahya",
          when: "Before sleeping"
        },
        {
          id: 6,
          arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
          translation: "O Allah, protect me from Your punishment on the day You resurrect Your servants",
          transliteration: "Allahumma qini 'adhabaka yawma tab'athu 'ibadaka",
          when: "Before sleeping"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <Link to="/kids-corner" className="text-[#3F8D98] hover:text-[#35767F] mb-4 inline-block">
          ← Back to Kids Corner
        </Link>
        
        <h1 className="text-4xl font-bold text-[#35767F] mb-8">Daily Duas for Kids</h1>
        
        <div className="space-y-8">
          {duas.map((category) => (
            <div key={category.category} className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#35767F] mb-6">{category.category}</h2>
              <div className="space-y-6">
                {category.items.map((dua) => (
                  <div key={dua.id} className="border-l-4 border-[#35767F] pl-4">
                    <div className="text-2xl font-arabic mb-2">{dua.arabic}</div>
                    <div className="text-gray-600 mb-2">{dua.translation}</div>
                    <div className="text-sm text-gray-500 mb-2">{dua.transliteration}</div>
                    <div className="text-sm font-medium text-[#35767F]">When: {dua.when}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Tips for Learning Duas</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start with short duas and gradually learn longer ones</li>
            <li>Practice saying them at the right times</li>
            <li>Learn the meaning of each dua</li>
            <li>Make it a daily habit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyDuas; 