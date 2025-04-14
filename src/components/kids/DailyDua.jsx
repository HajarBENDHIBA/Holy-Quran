import React from 'react';
import { Link } from 'react-router-dom';

const DailyDua = () => {
  const duas = [
    {
      id: 1,
      title: "Morning Dua",
      titleArabic: "دعاء الصباح",
      time: "When you wake up",
      timeArabic: "عند الاستيقاظ",
      dua: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
      translation: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the final return.",
      meaning: "This dua reminds us that everything is in Allah's control and we should trust Him in all matters.",
      meaningArabic: "هذا الدعاء يذكرنا أن كل شيء تحت سيطرة الله ويجب أن نثق به في جميع الأمور.",
      image: "../src/assets/morning.jpg"
    },
    {
      id: 2,
      title: "Before Eating",
      titleArabic: "قبل الأكل",
      time: "Before meals",
      timeArabic: "قبل الوجبات",
      dua: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
      translation: "In the name of Allah and with the blessings of Allah.",
      meaning: "We thank Allah for our food and ask for His blessings.",
      meaningArabic: "نشكر الله على طعامنا ونسأل بركته.",
      image: "../src/assets/eating.jpg"
    },
    {
      id: 3,
      title: "After Eating",
      titleArabic: "بعد الأكل",
      time: "After meals",
      timeArabic: "بعد الوجبات",
      dua: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
      translation: "All praise is due to Allah who fed me this and provided it for me, without any might or power from myself.",
      meaning: "We thank Allah for providing us with food and sustenance.",
      meaningArabic: "نشكر الله على توفير الطعام والرزق لنا.",
      image: "../src/assets/after-eating.jpg"
    },
    {
      id: 4,
      title: "Before Sleeping",
      titleArabic: "قبل النوم",
      time: "At bedtime",
      timeArabic: "وقت النوم",
      dua: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      translation: "In Your name, O Allah, I die and I live.",
      meaning: "We remember Allah before sleeping and trust Him with our lives.",
      meaningArabic: "نذكر الله قبل النوم ونتوكل عليه في حياتنا.",
      image: "../src/assets/sleeping.jpg"
    },
    {
      id: 5,
      title: "When Entering Home",
      titleArabic: "عند دخول المنزل",
      time: "When coming home",
      timeArabic: "عند العودة للمنزل",
      dua: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
      translation: "In the name of Allah we enter and in the name of Allah we leave, and upon our Lord we place our trust.",
      meaning: "We seek Allah's protection for our home and family.",
      meaningArabic: "نطلب حماية الله لمنزلنا وعائلتنا.",
      image: "../src/assets/home.jpg"
    },
    {
      id: 6,
      title: "When Sneezing",
      titleArabic: "عند العطاس",
      time: "After sneezing",
      timeArabic: "بعد العطاس",
      dua: "الْحَمْدُ لِلَّهِ",
      translation: "All praise is due to Allah.",
      meaning: "We thank Allah for keeping us healthy.",
      meaningArabic: "نشكر الله على الحفاظ على صحتنا.",
      image: "../src/assets/sneezing.jpg"
    },
    {
      id: 7,
      title: "When Starting Something New",
      titleArabic: "عند بدء شيء جديد",
      time: "Before new activities",
      timeArabic: "قبل الأنشطة الجديدة",
      dua: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
      meaning: "We begin everything with Allah's name for His blessings.",
      meaningArabic: "نبدأ كل شيء باسم الله لنيل بركته.",
      image: "../src/assets/starting.jpg"
    },
    {
      id: 8,
      title: "When Feeling Scared",
      titleArabic: "عند الشعور بالخوف",
      time: "When afraid",
      timeArabic: "عند الخوف",
      dua: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      meaning: "We seek Allah's protection when we feel scared.",
      meaningArabic: "نطلب حماية الله عندما نشعر بالخوف.",
      image: "../src/assets/scared.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
      <Link to="/kids-corner" className="inline-flex items-center text-[#3F8D98] hover:text-[#35767F] mb-8 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Kids Corner
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#35767F] mb-2">Daily Duas for Kids</h1>
          <h2 className="text-3xl font-arabic text-[#35767F]">أدعية يومية للأطفال</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {duas.map((dua) => (
            <div key={dua.id} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#35767F]">{dua.title}</h3>
                    <h4 className="text-xl font-arabic text-[#35767F]">{dua.titleArabic}</h4>
                    <p className="text-gray-500 mt-1">{dua.time}</p>
                    <p className="text-gray-500 font-arabic text-right">{dua.timeArabic}</p>
                  </div>
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={dua.image} 
                      alt={dua.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="bg-[#F5F9FA] p-4 rounded-lg mb-4">
                  <p className="text-xl font-arabic text-right mb-2">{dua.dua}</p>
                  <p className="text-gray-600 italic">{dua.translation}</p>
                </div>

                <div className="bg-[#E8F4F5] p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">{dua.meaning}</p>
                  <p className="text-gray-600 font-arabic text-right">{dua.meaningArabic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Why Learn Daily Duas?</h2>
            <h3 className="text-xl font-arabic">لماذا نتعلم الأدعية اليومية؟</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Learning daily duas helps children develop a strong connection with Allah from a young age. 
                These simple prayers teach them to remember Allah in their daily activities and seek His 
                blessings in everything they do.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Builds a habit of remembering Allah throughout the day</li>
                <li>Teaches gratitude and thankfulness</li>
                <li>Helps develop Islamic identity</li>
                <li>Provides comfort and protection</li>
                <li>Strengthens faith and connection with Allah</li>
              </ul>
            </div>
            <div className="text-right font-arabic">
              <p className="mb-4">
                تعلم الأدعية اليومية يساعد الأطفال على تطوير علاقة قوية مع الله منذ الصغر.
                هذه الصلوات البسيطة تعلمهم تذكر الله في أنشطتهم اليومية وطلب بركته في كل ما يفعلونه.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>يبني عادة تذكر الله طوال اليوم</li>
                <li>يعلم الشكر والامتنان</li>
                <li>يساعد في تطوير الهوية الإسلامية</li>
                <li>يوفر الراحة والحماية</li>
                <li>يقوي الإيمان والاتصال بالله</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDua; 