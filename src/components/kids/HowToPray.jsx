import React from 'react';
import { Link } from 'react-router-dom';

const HowToPray = () => {
  const prayerSteps = [
    {
      step: 1,
      title: "Make Intention (Niyyah)",
      titleArabic: "النية",
      description: "Stand facing the Qibla and make intention to pray",
      descriptionArabic: "قف باتجاه القبلة وانوي الصلاة",
      arabic: "نَوَيْتُ أَنْ أُصَلِّيَ",
      tip: "Make sure you're facing the right direction"
    },
    {
      step: 2,
      title: "Takbir",
      titleArabic: "تكبيرة الإحرام",
      description: "Raise your hands and say 'Allahu Akbar'",
      descriptionArabic: "ارفع يديك وقل الله أكبر",
      arabic: "الله أكبر",
      tip: "Keep your hands at shoulder level"
    },
    {
      step: 3,
      title: "Qiyam (Standing) - First Raka",
      titleArabic: "القيام - الركعة الأولى",
      description: "Recite Surah Al-Fatiha and another surah",
      descriptionArabic: "اقرأ سورة الفاتحة وسورة أخرى",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      tip: "Keep your hands folded on your chest"
    },
    {
      step: 4,
      title: "Ruku (Bowing)",
      titleArabic: "الركوع",
      description: "Bow down and say 'Subhana Rabbiyal Adheem' three times",
      descriptionArabic: "انحني وقل سبحان ربي العظيم ثلاث مرات",
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      tip: "Keep your back straight and hands on knees"
    },
    {
      step: 5,
      title: "Standing from Ruku",
      titleArabic: "القيام من الركوع",
      description: "Stand up straight saying 'Sami Allahu liman hamidah'",
      descriptionArabic: "قم معتدلاً قائلاً سمع الله لمن حمده",
      arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
      tip: "Keep your back straight while standing"
    },
    {
      step: 6,
      title: "Sujood (Prostration)",
      titleArabic: "السجود",
      description: "Prostrate and say 'Subhana Rabbiyal A'la' three times",
      descriptionArabic: "اسجد وقل سبحان ربي الأعلى ثلاث مرات",
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      tip: "Place your forehead, nose, hands, knees, and toes on the ground"
    },
    {
      step: 7,
      title: "Jalsa (Sitting)",
      titleArabic: "الجلوس",
      description: "Sit between the two prostrations and say 'Rabbighfirli'",
      descriptionArabic: "اجلس بين السجدتين وقل رب اغفر لي",
      arabic: "رَبِّ اغْفِرْ لِي",
      tip: "Keep your right foot upright and left foot flat"
    },
    {
      step: 8,
      title: "Second Sujood",
      titleArabic: "السجود الثاني",
      description: "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      descriptionArabic: "اسجد مرة أخرى وقل سبحان ربي الأعلى ثلاث مرات",
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      tip: "Same as first prostration"
    },
    {
      step: 9,
      title: "Second Raka - Standing",
      titleArabic: "الركعة الثانية - القيام",
      description: "Stand up for second raka and repeat steps 3-8",
      descriptionArabic: "قم للركعة الثانية وكرر الخطوات 3-8",
      tip: "Start with 'Bismillah' and Surah Al-Fatiha"
    },
    {
      step: 10,
      title: "Tashahhud",
      titleArabic: "التشهد",
      description: "Sit and recite the Tashahhud",
      descriptionArabic: "اجلس واقرأ التشهد",
      arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ",
      tip: "Point your index finger while reciting"
    },
    {
      step: 11,
      title: "Salam",
      titleArabic: "السلام",
      description: "Turn your head right and left saying 'Assalamu alaikum'",
      descriptionArabic: "أدر رأسك يميناً ويساراً قائلاً السلام عليكم",
      arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
      tip: "Complete the prayer with peace greetings"
    }
  ];

  const dailyPrayers = [
    {
      name: "Fajr",
      nameArabic: "الفجر",
      time: "Dawn",
      timeArabic: "الفجر",
      rakahs: "2",
      description: "The morning prayer before sunrise",
      descriptionArabic: "صلاة الصبح قبل شروق الشمس",
      color: "bg-gradient-to-r from-blue-50 to-blue-100"
    },
    {
      name: "Dhuhr",
      nameArabic: "الظهر",
      time: "Noon",
      timeArabic: "الظهر",
      rakahs: "4",
      description: "The midday prayer after the sun passes its zenith",
      descriptionArabic: "صلاة الظهر بعد زوال الشمس",
      color: "bg-gradient-to-r from-green-50 to-green-100"
    },
    {
      name: "Asr",
      nameArabic: "العصر",
      time: "Afternoon",
      timeArabic: "العصر",
      rakahs: "4",
      description: "The afternoon prayer in the late part of the day",
      descriptionArabic: "صلاة العصر في وقت متأخر من النهار",
      color: "bg-gradient-to-r from-yellow-50 to-yellow-100"
    },
    {
      name: "Maghrib",
      nameArabic: "المغرب",
      time: "Sunset",
      timeArabic: "المغرب",
      rakahs: "3",
      description: "The prayer just after sunset",
      descriptionArabic: "صلاة المغرب بعد غروب الشمس مباشرة",
      color: "bg-gradient-to-r from-orange-50 to-orange-100"
    },
    {
      name: "Isha",
      nameArabic: "العشاء",
      time: "Night",
      timeArabic: "العشاء",
      rakahs: "4",
      description: "The night prayer after twilight has disappeared",
      descriptionArabic: "صلاة العشاء بعد اختفاء الشفق",
      color: "bg-gradient-to-r from-purple-50 to-purple-100"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
      <Link to="/kids-corner" className="inline-flex items-center text-[#3F8D98] hover:text-[#35767F] mb-8 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Kids Corner
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#35767F] mb-2">How to Pray</h1>
          <h2 className="text-3xl font-arabic text-[#35767F]">كيفية الصلاة</h2>
        </div>

        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="../src/assets/prayer.jpg" 
            alt="Steps of Prayer" 
            className="w-9/12 h-auto object-cover mx-auto"
          />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-center text-[#35767F] mb-2">What is Prayer?</h2>
          <h3 className="text-2xl font-arabic text-center text-[#35767F] mb-4">ما هي الصلاة؟</h3>
          <p className="text-gray-600 mb-2">
            Prayer is our special way of talking to Allah. It's like having a conversation with our Creator five times a day!
          </p>
          <p className="text-gray-600 font-arabic text-right">
            الصلاة هي طريقتنا الخاصة للتحدث مع الله. إنها مثل إجراء محادثة مع خالقنا خمس مرات في اليوم
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-[#35767F] mb-4">The Five Daily Prayers</h2>
          <h3 className="text-2xl font-arabic text-[#35767F] mb-4">الصلوات الخمس اليومية</h3>
          <div className="grid grid-cols-1 gap-6">
            {dailyPrayers.map((prayer) => (
              <div key={prayer.name} className={`${prayer.color} p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300`}>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-[#35767F]">{prayer.name}</h4>
                    <span className="text-gray-600">Time: {prayer.time}</span>
                  </div>
                  <div className="text-right">
                    <h4 className="text-2xl font-arabic font-bold text-[#35767F]">{prayer.nameArabic}</h4>
                    <span className="text-gray-600 font-arabic">{prayer.timeArabic}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">{prayer.description}</p>
                    <p className="text-gray-600 mt-2">Number of Rakahs: {prayer.rakahs}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-arabic">{prayer.descriptionArabic}</p>
                    <p className="text-gray-600 font-arabic mt-2">عدد الركعات: {prayer.rakahs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {prayerSteps.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#35767F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-[#35767F] mb-1">{step.title}</h2>
                    <h3 className="text-xl font-arabic text-[#35767F]">{step.titleArabic}</h3>
                  </div>
                  {step.arabic && (
                    <div className="text-2xl font-arabic mb-2 text-gray-700">{step.arabic}</div>
                  )}
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-gray-600 font-arabic text-right">{step.descriptionArabic}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-700">
                      <span className="font-semibold">Tip:</span> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#35767F] text-white p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Important Things to Remember</h2>
            <h3 className="text-xl font-arabic">أشياء مهمة للتذكر</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Always face the Qibla (direction of Kaaba)</li>
              <li>Make sure you're clean and have done wudu</li>
              <li>Be focused and humble during prayer</li>
              <li>Pray on time</li>
              <li>Learn the meanings of what you're saying</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-right font-arabic">
              <li>واجه القبلة دائماً</li>
              <li>تأكد من نظافتك وأنك قد توضأت</li>
              <li>كن مركزاً ومتواضعاً أثناء الصلاة</li>
              <li>صل في وقتها</li>
              <li>تعلم معاني ما تقوله</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Fun Fact!</h2>
            <h3 className="text-lg font-arabic text-yellow-800">معلومة ممتعة!</h3>
          </div>
          <p className="text-yellow-800 mb-2">
            Did you know? Prayer is the second pillar of Islam and the first thing we'll be asked about on the Day of Judgment!
          </p>
          <p className="text-yellow-800 font-arabic text-right">
            هل تعلم؟ الصلاة هي الركن الثاني من أركان الإسلام وأول شيء سنُسأل عنه يوم القيامة!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPray; 